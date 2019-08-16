const passport = require("passport");
const userService = require("../services/users");

function login(req, res) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      return res.json(user.toAuthJSON());
    });
  })(req, res);
}

const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await userService.create(username, email, password);
    return res.send(user.toInfoJSON());
  } catch (error) {
    return res.status(400).send({
      message: error
    });
  }
};

module.exports = {
  login,
  register
};

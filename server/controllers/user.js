const userService = require("../services/users");

function getUser(req, res) {
  res.send(req.user.toInfoJSON());
}

const getAll = async (req, res,next) => {
  skip = req.body.skip || 0;
  limit = req.body.limit || 10;
  try {
    const users = await userService.getAll(skip, limit);
    return res.send({
      data: users.map(u => u.toInfoJSON())
    });
  } catch (err) {
    return res.status(400).send({
      message: err
    })
  }
};

module.exports = {
  getUser,
  getAll
};

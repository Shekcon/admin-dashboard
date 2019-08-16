const User = require("../models/Users");

function create(username, email, password) {
  const user = new User({
    username: username,
    email: email
  });
  user.hashPassword(password);
  return user.save();
}

const getAll = (skip, limit, sort) => {
  return User.find()
    .skip(skip)
    .limit(limit)
    .exec();
};

module.exports = {
  create,
  getAll
};

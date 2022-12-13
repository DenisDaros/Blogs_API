const { User } = require('../models');

const getByEmailPassword = async (email, password) => {
  const users = await User.findOne({ where: { email, password } });

  return users;
};

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  getByEmailPassword,
  getByUserId,
};
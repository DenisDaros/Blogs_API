const { User } = require('../models');

const getByEmailPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  return user;
};

const getByUserId = (userId) => User.findByPk(userId);

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getUserId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  getByEmailPassword,
  getByUserId,
  getByEmail,
  createUser,
  getAllUsers,
  getUserId,
};
require('dotenv/config');
const jwt = require('jsonwebtoken');

const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email, password) => email && password;

const getByEmailPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }
  
      const user = await UserService.getByEmailPassword(email, password);

      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' }); 
      }

      const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

      const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  
      res.status(200).json({ token });
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
  };

  const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    try {
    const user = await UserService.getByEmail(email);

    if (user) return res.status(409).json({ message: 'User already registered' });

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { user: email } }, secret, jwtConfig);

    await UserService.createUser({ displayName, email, password, image });
    return res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getAllUsers = async (req, res) => {
    try {
    const users = await UserService.getAllUsers();
   return res.status(200).json(users);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  };

  const getUserId = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserId(id);
      if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
      }
    return res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  };
  
module.exports = {
  getByEmailPassword,
  createUser,
  getAllUsers,
  getUserId,
};
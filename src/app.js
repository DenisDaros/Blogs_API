const express = require('express');

const User = require('./controllers/user.controller');
const middlewareUser = require('./middlewares/valid.User');
const validateToken = require('./auth/validateJWT');

const app = express();

app.use(express.json());

app.post('/login', User.getByEmailPassword);
app.post('/user',
middlewareUser.validationDisplayName,
middlewareUser.validationEmail,
middlewareUser.validationPassword,
User.createUser);
app.get('/user', validateToken, User.getAllUsers);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

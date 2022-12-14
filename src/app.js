const express = require('express');

const User = require('./controllers/user.controller');
const middlewareUser = require('./middlewares/valid.User');
const middlewareCategory = require('./middlewares/valid.Categorie');
const validateToken = require('./auth/validateJWT');
const Categories = require('./controllers/category.controller');
const BlogPost = require('./controllers/blogpost.controller');

const app = express();

app.use(express.json());

app.post('/login', User.getByEmailPassword);

app.post('/user',
middlewareUser.validationDisplayName,
middlewareUser.validationEmail,
middlewareUser.validationPassword,
User.createUser);
app.get('/user', validateToken, User.getAllUsers);
app.get('/user/:id', validateToken, User.getUserId);

app.post('/categories', validateToken, middlewareCategory.validationName, Categories.addCategory);
app.get('/categories', validateToken, Categories.allCategories);

app.get('/post', validateToken, BlogPost.getPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

// Middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Authentification endpoints
app.post('/signup',AuthController.signUp);
app.post('/login',AuthController.login);

app.get("/user/all", UserController.getAllUsers);
app.get("/user/:id", UserController.getUserById);

module.exports = app;
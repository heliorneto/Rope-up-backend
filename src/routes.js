const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const UserValidator = require('./Validators/UserValidator');

routes.get('/users/:user_id', UserValidator.getByUser, UserController.getById);
routes.post('/users', UserValidator.create, UserController.create);
routes.put('/users/:user_id', UserValidator.update, UserController.update);
routes.delete('/users/:user_id', UserValidator.delete, UserController.delete);

module.exports = routes;
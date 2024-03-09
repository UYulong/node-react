var express = require('express');
var UserRoute = express.Router();
const UserController = require('../../controllers/admin/UserController');

/* GET users listing. */
UserRoute.post('/admin-api/login', UserController.login);
UserRoute.post('/admin-api/queryUserInfo', UserController.queryUserInfo);

module.exports = UserRoute;
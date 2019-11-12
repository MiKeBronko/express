const users = require('express').Router();

const { resUsers, findUser } = require('../helpers/helpers.js');

users.get('/users', resUsers);

users.get('/users/:id', findUser);

module.exports = users;

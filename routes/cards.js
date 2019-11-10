const cards = require('express').Router();

const resCards = require('../helpers/helpers1.js');

cards.get('/cards', resCards );

module.exports = cards;

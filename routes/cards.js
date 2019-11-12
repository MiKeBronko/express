const cards = require('express').Router();

const { resCards } = require('../helpers/helpers.js');

cards.get('/cards', resCards);

module.exports = cards;

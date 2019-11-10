const express = require('express');

const app = express();
const users = require('./routes/users.js'); // импортируем роутер
const cards = require('./routes/cards.js'); // импортируем роутер

const path = require('path');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', users);
app.use('/', cards);

app.get('/*', (req, res) => {
  res.status(404);
  res.send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

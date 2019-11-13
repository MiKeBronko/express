const express = require('express');

const app = express();

const path = require('path');

const router = require('./routes/index.js');


const { PORT = 3000 } = process.env;

app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/*', (req, res) => {
  res.status(404);
  res.send('{ "message": "Запрашиваемый ресурс не найден" }');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

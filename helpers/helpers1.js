const fs = require('fs');

const readCards = (fileName) =>{
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

const resCards = async (req, res) => {
  const data = await readCards('./data/cards.json');
  res.send(data);
};

module.exports = resCards;

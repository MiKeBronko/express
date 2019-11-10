const fs = require('fs');

const usersJson = require('../data/users.json');

const readUsers = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

const resUsers = async (req, res) => {
  const data = await readUsers('./data/users.json');
  res.send(data);
};

const findUser = (req, res) => {
  const { id } = req.params;
  const user = usersJson.find(user => {
    return user._id === id;
  });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({"message": "Нет пользователя с таким id"});
  }
};


module.exports = {
  resUsers,
  findUser,
};

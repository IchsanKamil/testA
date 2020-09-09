const { User } = require('../models');
const { compare } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class Controller {
  static register(req, res, next) {
    const { email, password } = req.body;
    const newUser = { email, password };

    User.create(newUser)
      .then((result) => {
        console.log('cek');
        const { id, email } = result;
        const data = { id, email };

        res.status(201).json(data);
      }).catch((err) => {
        console.log(err, 'err');
        next(err)
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({
      where: { email }
    })
      .then((data) => {
        if (data) {
          if (compare(password, data.password)) {
            let payload = {
              id: data.id,
              email
            }
            const token = generateToken(payload);

            res.status(200).json({
              id: data.id,
              email,
              token
            });
          } else throw ({ name: `EMAIL/PASSWORD_NOT_MATCH` })
        } else throw ({ name: `EMAIL_NOT_FOUND` })
      }).catch((err) => {
        next(err);
      });
  }

  static profile(req, res) {
    const { id, email } = req.user;

    res.status(200).json({ id, email })
  }
}

module.exports = Controller;
const validtions = require('../validtion');
const db = require('../db');
const statusType = require('../validtion').statusType;

module.exports = (req, res, next) => {
  const user = req.body.user;

  validtions.registration(user).then(result => {
    if (!result.status) {
      res.send({error: result.errors});
    } else {
      db.findOne(user.email, (err, existingUser) => {
        if (err) {
          console.error("ERROR: ", err);
          res.send({error: err});
        }
        if(!existingUser) {
          db.insertOne(user, err => {
            if (err) {
              console.error("ERROR: ", err);
              res.send(err);
            } else {
              res.send({user: statusType.registrated});
            }
          })
        } else {
          res.send({error: statusType.alreadyExists});
        }
      });
    }
  });
}
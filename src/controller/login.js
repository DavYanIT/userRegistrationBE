const validtions = require('../validtion')
const db = require('../db');
const statusType = require('../validtion').statusType

module.exports = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    validtions.login(email, password).then(result => {
      if (!result.status) {
        res.send({error: result.errors});
      } else {
        db.findOne(email, (err, user) => {
          if (err) {
            console.error("ERROR: ", err);
            res.send({error: err});
          }
          if (!user) {
            res.send({error: statusType.doesNotExist});
          } else if(user.password === password) {
            res.send({user});
          } else {
            res.send({error: statusType.wrongPass});
          }
        })
      }
  
    })
}
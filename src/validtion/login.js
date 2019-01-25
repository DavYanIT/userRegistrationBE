const validator = require('node-input-validator');

module.exports = (email, password) => {
    let loginValidator = new validator( {email, password}, {
        email:'required|email',
        password: 'required|minLength:6'
      });
    
      return loginValidator.check().then(matched => {
        if (!matched) {
            return {
                status: false,
                errors: loginValidator.errors
            }
        } else {
            return {
                status: true
            }
        }
    })
}
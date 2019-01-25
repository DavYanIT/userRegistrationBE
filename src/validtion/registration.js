const validator = require('node-input-validator');

module.exports = (user) => {
    console.log(user)
    let registrationValidator = new validator( user, {
        firstName: 'required|minLength:3',
        lastName: 'required|minLength:3',
        email:'required|email',
        password: 'required|minLength:6'
      });
    
      return registrationValidator.check().then(matched => {
        if (!matched) {
            return {
                status: false,
                errors: registrationValidator.errors
            }
        } else {
            return {
                status: true,
            }
        }
    })
}
const validator = require('node-input-validator');
const login = require('./login');
const registration = require('./registration');
const customMessages = require('./customMessages');
const statusType = require('./statusType');

validator.customMessages(customMessages);

module.exports = {
    login,
    registration,
    statusType
}
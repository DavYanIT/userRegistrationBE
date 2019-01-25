const dbUrl = require('../config').db.url;
const mongoose = require('mongoose');

const dbConnect = callback => {
    mongoose.connect(dbUrl,callback);
}

const dbClose = db => {
    db.close();
}

const findOne = (email, callback) => {
    dbConnect((error, db) => {
        if (error) {
            return error;
        }
        db.collection("users").findOne({email}, callback)
        dbClose(db);
    })
}

const insertOne = (user, callback) => {
    dbConnect((error, db) => {
        if (error) {
            return error;
        }
        db.collection("users").insertOne(user, callback)
        dbClose(db);
    })
}

module.exports = {
    findOne,
    insertOne,
}
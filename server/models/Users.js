var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcryptjs = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sercetkey = require('../config').sercetkey;

var UserSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, required: true, match: /^[a-zA-Z0-9]+$/, index: true, unique: true },
    email: { type: String, lowercase: true, required: true, match: /\S+@\S+\.\S+/, index: true, unique: true },
    hash: String
}, { timestamps: true });


UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.hashPassword = function (pwd) {
    this.hash = bcryptjs.hashSync(pwd)
}

UserSchema.methods.verifyPassword = function (pwd) {
    return bcryptjs.compareSync(pwd, this.hash)
}

UserSchema.methods.generateJWT = function () {
    return jwt.sign({
        id: this._id,
        username: this.username
    }, sercetkey,
        {
            expiresIn: '7d'
        });
}

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT()
    };
};

UserSchema.methods.toInfoJSON = function () {
    return {
        id: this._id,
        username: this.username,
        email: this.email
    };
};

module.exports = mongoose.model('User', UserSchema);
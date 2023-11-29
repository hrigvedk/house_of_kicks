const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trime: true,
        validate(value) {
            if(!value.isAlpha(value)) {
                throw new Error('First Name is Invalid')
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!value.isAlpha(value)) {
                throw new Error('Last Name is Invalid')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if(!validator.isStrongPassword(value)) {
                throw new Error('Password is too weak. Try a stronger password')
            }
        }
    },
    phone: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ], 
    profilePicture: {
        type: Buffer
    }

})
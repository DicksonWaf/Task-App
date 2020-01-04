const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Not a valid email')
            }
        }
    },
    password:{
        type: String,
        trim:true,
    },
    age:{
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error("Age cannot be negative")
            }
        }
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
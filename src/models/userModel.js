const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance: {
        type: Number,
        default: 100
    },
    address: String,
    age: Number,
    gender: {
    type: String,
    enum: ["male", "female", "Other"]} ,
    isFreeAppUser: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('UserModel', userSchema) //users



// String, Number
// Boolean, Object/json, array
   // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]

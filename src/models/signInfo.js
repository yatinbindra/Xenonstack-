const express = require("express");
const mongoose = require("mongoose");
// const validator = require("validator");
// const { default: isEmail } = require("validator/lib/isemail");

const loginSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
      },
  email: {
    type: String,
    required: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Invalid Email Id");
    //   }
    // },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  password: {
    type: String,
    required: true,
    min: 10,
  }
});


const Userlog = mongoose.model('Userlog', loginSchema);

module.exports = Userlog;
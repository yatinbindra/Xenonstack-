const express = require("express");
const mongoose = require("mongoose");
// const validator = require("validator");
// const { default: isEmail } = require("validator/lib/isemail");

const userSchema = mongoose.Schema({
  address1: {
    type: String,
    required: true,

  },
  address2: {
    type: String,
    required: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Invalid Email Id");
    //   }
    // },
  },
  postcode: {
    type: String,
    required: true,
  
  },
  state: {
    type: String,
    required: true,
   
  }, 
  area: {
    type: String,
    required: true,
   
  },
  country: {
    type: String,
    required: true,
  
  },
  state: {
    type: String,
    required: true,
    
  },
  landmark: {
    type: String,
    required: true,
    
  },


});


const addlog = mongoose.model('addlog', userSchema);

module.exports = addlog;
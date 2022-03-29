const express = require('express')
const mongoose = require('mongoose')
const {Schema, model} = mongoose

const schema = new Schema({
  username: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = new model('User', schema)
module.exports = User

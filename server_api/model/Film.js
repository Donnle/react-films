const express = require('express')
const mongoose = require('mongoose')
const {Schema, model} = mongoose

const schema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  actors: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  posterUrl: {
    type: String,
    required: true
  },
})

const Film = new model('Film', schema)
module.exports = Film

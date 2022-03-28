const {Router} = require('express')
const mongoose = require("mongoose");
const User = require('../model/User')
const Film = require('../model/Film')
const router = Router()

router.get('/films', async (req, res) => {
  const page = +req.query.page - 1    // pagination starts from 0
  const countPostsOnPage = 20
  const films = await Film.find({_id: {$gt: countPostsOnPage * page}}).limit(countPostsOnPage)
  return res.status(200).json({films, countPages: 8})
})

module.exports = router


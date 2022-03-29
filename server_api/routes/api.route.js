const {Router} = require('express')
const mongoose = require("mongoose");
const User = require('../model/User')
const Film = require('../model/Film')
const router = Router()

router.get('/films', async (req, res) => {
  const page = +req.query.page - 1    // pagination starts from 0
  const searchText = req.query.searchText || 0
  const countPostsOnPage = 20

  console.log(req.query.searchText)
  if(searchText){
    const films = await Film.find({title: {$regex: searchText}})
    console.log(films)
    return res.status(200).json({films})
  } else {
    const films = await Film.find({_id: {$gt: countPostsOnPage * page}}).limit(countPostsOnPage)
    console.log(films)
    return res.status(200).json({films, countPages: 8})
  }
})

module.exports = router


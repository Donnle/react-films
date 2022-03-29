const {Router} = require('express')
const mongoose = require("mongoose");
const User = require('../model/User')
const Film = require('../model/Film')
const router = Router()

router.get('/films', async (req, res) => {
  const page = +req.query.page - 1    // pagination starts from 0
  const searchText = req.query.searchText || 0
  const countPostsOnPage = 20

  if (searchText) {
    const films = await Film.find({title: {$regex: searchText}})
    return res.status(200).json({films})
  } else {
    const films = await Film.find({_id: {$gt: countPostsOnPage * page}}).limit(countPostsOnPage)
    return res.status(200).json({films, countPages: 8})
  }
})

router.post('/add-user', async (req, res) => {
  const userData = req.body
  const {username, login, password} = userData

  const isLoginUniq = !await User.findOne({login})
  const isUsernameUniq = !await User.findOne({username})

  if (isLoginUniq && isUsernameUniq) {
    const user = new User(userData)
    user.save()
    return res.send({message: "user was created"})
  } else if (isLoginUniq) {
    return res.send({message: "This login is taken"})
  } else if (isUsernameUniq) {
    return res.send({message: "This nickname is taken"})
  } else {
    return res.send({message: "This login and nickname are taken"})
  }
})

module.exports = router


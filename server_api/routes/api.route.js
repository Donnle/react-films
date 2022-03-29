const {Router} = require('express')
const User = require('../model/User')
const Film = require('../model/Film')
const router = Router()

router.get('/films', async (req, res) => {
  const page = +req.query.page - 1    // pagination starts from 0
  const countPostsOnPage = 20

  const films = await Film.find({_id: {$gt: countPostsOnPage * page}}).limit(countPostsOnPage)
  return res.status(200).json({films, countPages: 8})

})

router.post('/add-user', async (req, res) => {
  const userData = req.body
  const {username, login} = userData

  const isLoginUniq = !await User.findOne({login})
  const isUsernameUniq = !await User.findOne({username})

  if (isLoginUniq && isUsernameUniq) {
    const user = new User(userData)
    user.save()
    return res.status(201).send({message: "User was created"})
  } else if (isLoginUniq) {
    return res.status(406).send({message: "This login is taken"})
  } else if (isUsernameUniq) {
    return res.status(406).send({message: "This nickname is taken"})
  } else {
    return res.status(406).send({message: "This login and nickname are taken"})
  }
})

router.post('/login-user', async (req, res) => {
  const {login, password} = req.body
  const userData = await User.findOne({login, password})

  if (userData) return res.status(201).send({userData})
  return res.status(406).send({message: "User is not defined"})
})

module.exports = router


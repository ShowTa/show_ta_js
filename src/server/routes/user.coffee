express = require 'express'
router  = express.Router()
User    = require '../controllers/user'

router.get '/', (req, res, next) ->
  User.all().then (users) ->
    res.send users

router.post '/post', (req, res) ->
  res.send  User.create()

module.exports = router

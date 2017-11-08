express  = require 'express'
router   = express.Router()
Favorite = require '../controllers/favorite'

# endpoint
router.post '/', (req, res) ->
  Favorite.create req.body

module.exports = router

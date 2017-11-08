express = require 'express'
router  = express.Router()
Article = require '../controllers/article'

# endpoint
router.get '/', (req, res, next) ->
  res.send 'article top screen'

router.post '/create', (req, res) ->
  Article.create req.body

module.exports = router

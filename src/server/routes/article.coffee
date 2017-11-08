express = require 'express'
router  = express.Router()
Article = require '../controllers/article'

# endpoint
router.get '/', (req, res) ->
  Article.all().then (article) ->
    res.send article

router.post '/create', (req, res) ->
  Article.create req.body

router.patch '/update', (req, res) ->
  Article.update req.body

module.exports = router

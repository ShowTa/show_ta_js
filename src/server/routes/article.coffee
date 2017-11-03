express = require 'express'
router  = express.Router()

router.get '/', (req, res, next) ->
  res.send 'article top screen'

module.exports = router

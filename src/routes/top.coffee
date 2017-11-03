express = require('express')
router  = express.Router()

router.get '/', (req, res, next) ->
  res.send 'top screen'

module.exports = router

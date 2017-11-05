User    = require '../models/user'

exports.all = ->
  User.findAll()

# TODO: parameterでinsert出来るように
exports.create = ->
  User.create
    firstName: 'foo'
    lastName:  'bar'

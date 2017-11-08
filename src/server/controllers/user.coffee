User = require '../database/models/user'

exports.all = ->
  User.findAll()

# TODO: parameterでinsert出来るように
exports.create = ->
  User.create
    name: 'foo bar'

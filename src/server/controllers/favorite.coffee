Favorite = require '../database/models/favorite'

exports.create = (body) ->
  Favorite.create
    fromUser: body.fromUser
    toUser:   body.toUser

exports.destroy = (body) ->
  Favorite.destroy name: body.id

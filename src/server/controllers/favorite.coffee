Favorite = require '../database/models/favorite'

exports.create = (body) ->
  Favorite.create
    fromUser: body.fromUser
    toUser:   body.toUser

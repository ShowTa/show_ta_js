Article = require '../database/models/article'

exports.all = ->
  Article.findAll()

exports.create = (body) ->
  Article.create
    title:   body.title
    content: body.content

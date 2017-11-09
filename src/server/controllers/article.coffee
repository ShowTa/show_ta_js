Article = require '../database/models/article'

exports.all = ->
  Article.findAll()

exports.show = (body) ->
  Article.findById body.id

exports.create = (body) ->
  Article.create
    title:   body.title
    content: body.content

exports.update = (body) ->
  Article.update {
    title:   body.title
    content: body.content
  }, where: id: body.id

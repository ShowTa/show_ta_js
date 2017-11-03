models = require '../models'

Object.keys(models).forEach( (key) ->
  models[key].sync({force: true}).catch( (errs) -> console.error('DATABASE SYNC', errs) )
)


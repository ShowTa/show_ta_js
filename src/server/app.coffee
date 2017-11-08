express = require 'express'
app  = express()
http = require('http').Server(app)
port = process.env.PORT || 3000
path = require 'path'
# body-parser
bodyParser = require 'body-parser'
app.use bodyParser()

# middleware
article  = require './routes/article'
user     = require './routes/user'
favorite = require './routes/favorite'

app.use('/public', express.static(__dirname + '/public'))

app.get '/', (req, res) ->
  res.sendFile path.resolve('src/server/index.html')

# controller
app.use '/article', article
app.use '/user', user
app.use '/favorite', favorite

http.listen port, ->
  console.log "listening on *:", port

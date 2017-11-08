express = require 'express'
app  = express()
http = require('http').Server(app)
port = process.env.PORT || 3000
path = require 'path'

# middleware
article = require './routes/article'
user    = require './routes/user'

app.use('/public', express.static(__dirname + '/public'))

app.get '/', (req, res) ->
  res.sendFile path.resolve('src/server/index.html')

app.use '/article', article
app.use '/user', user

http.listen port, ->
  console.log "listening on *:", port

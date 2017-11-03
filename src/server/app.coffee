express = require('express')
app = express()
http = require('http').Server(app)
port = 3000
path = require('path')

app.use('/public', express.static(__dirname + '/public'))

app.get '/', (req, res) ->
  res.sendFile path.resolve('src/server/index.html')

http.listen port, ->
  console.log "listening on *:", port
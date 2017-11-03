app = require('express')()
http = require('http').Server(app)
port = 3000

app.get '/', (req, res) ->
  res.send 'coffee&express Hello!'

http.listen port, ->
  console.log "listening on *:", port
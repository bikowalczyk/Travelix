var express = require('express')
var app = express()

var fs = require('fs');
var http = require('http');

app.set('port', (process.env.PORT || 5500))
app.use('/travelix', express.static(__dirname + '/public'))


app.get('/travelix', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
})

app.listen(5500, '127.0.0.1', function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})
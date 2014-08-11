var express = require('express')
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


buf = fs.readFileSync('./index.html')
app.get('/',function(request, response){
  response.send(buf.toString())
})


/*
app.get('/', function(request, response) {
  response.send('Hello World!')
})
*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
   response.sendFile(path.join(__dirname, 'public/views/index.html'))
});

app.get('/getDem', function(request, response){
   response.sendFile(path.join(__dirname, 'data/democranberries.json'))
});

app.get('/getRep', function(request, response){
   response.sendFile(path.join(__dirname, 'data/republicats.json'))
});

app.listen(3000, function(){
   console.log("Listening on Local Host 3000!");
});
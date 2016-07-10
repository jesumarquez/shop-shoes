var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(port, function(){
    console.log('server is running on port ' + port + ' !!!');
});
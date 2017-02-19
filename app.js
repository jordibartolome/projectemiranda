var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, 'client')))

// app.get('/', function (req, res) {
// 	return res.redirect('/#!/start');
// })
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/templates/main.html'));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Projecte Miranda - running!", this.address().port, app.settings.env);
});

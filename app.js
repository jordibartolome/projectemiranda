var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use('/static', express.static(path.join(__dirname, 'client')))

// app.get('/', function (req, res) {
// 	return res.redirect('/#!/start');
// })
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/templates/main.html'));
})

app.get('/sitemap.xml', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/xml/sitemap.xml'));
})

app.get('/robots.txt', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/txt/robots.txt'));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Projecte Miranda - running!", this.address().port, app.settings.env);
});

// EMAIL
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var helper = require('sendgrid').mail;
app.post('/new_partner', function (req, res) {
	from_email = new helper.Email("cavalls@fundaciomiranda.org");
	to_email = new helper.Email("cavalls@fundaciomiranda.org");
	subject = "Nou soci!";
	content = new helper.Content("text/plain", "Nou soci \n \n Nom: " + req.body.firstName + " " + req.body.lastName + " \n \n " + "Telèfon: " + req.body.phone + " \n \n " + "Email: " + req.body.email + " \n \n " + "Adreça: " + req.body.address + " \n \n " + "Quota: " + req.body.contribution + " \n \n " + "Número de compte: " + req.body.bankAccount + " \n \n " + "Titular del compte bancari: " + req.body.owner + " \n \n " + "Tipus de document: " + req.body.idType + " \n \n " + "Número: " + req.body.idNumber + " \n \n " + "Cavall: " + req.body.horse);
	mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function(error, response) {})

});
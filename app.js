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



// EMAIL
var helper = require('sendgrid').mail;
  
// 	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// })

app.post('/parse', function (req, res) {
  // var from = req.body.from;
  // var text = req.body.text;
  // var subject = req.body.subject;
  // var num_attachments = req.body.attachments;
  // for (i = 1; i <= num_attachments; i++){
  //   var attachment = req.files['attachment' + i];
  //   // attachment will be a File object
  // }

  console.log("ENVIAT!!!")

	from_email = new helper.Email("jordi@noteflight.com");
	to_email = new helper.Email("jordi87@gmail.com");
	subject = "Nou soci!";
	content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
	mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	})

});

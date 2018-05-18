var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, 'client/templates'));
app.set('view engine', 'html');
 

app.use('/static', express.static(path.join(__dirname, 'client')))

// ROUTES 
app.get('/', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/whatDoWeDo.html') }});
});

app.get('/kitchen', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/kitchen.html') }});
});

app.get('/where', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/where.html') }});
});

app.get('/social_contribution', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/socialContribution.html') }});
});


app.get('/team', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/team.html') }});
});

app.get('/contact', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/contact.html') }});
});

app.get('/nature', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/nature.html') }});
});

app.get('/przewalski', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/przewalski.html') }});
});

app.get('/collaborate', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/collaborate.html') }});
});

app.get('/sponsor', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/sponsor.html') }});
});

app.get('/animal', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/animal.html') }});
});

app.get('/become_partner', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/becomePartner.html') }});
});

app.get('/become_volunteer', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/becomeVolunteer.html') }});
});

app.get('/how_we_spend_donations', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/howWeSpendDonations.html') }});
});

app.get('/nomads', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/nomads.html') }});
});

app.get('/press', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/press.html') }});
});

app.get('/our_horses', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/ourHorses.html') }});
});

app.get('/dog_team', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/dogTeam.html') }});
});

app.get('/donate', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/donate.html') }});
});

app.get('/meet_us', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/meet_us.html') }});
});

app.get('/visits', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/visits.html') }});
});

app.get('/visits_garraf', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/visits_garraf.html') }});
});

app.get('/holidays_and_relax', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/holidays_and_relax.html') }});
});

app.get('/culture_and_nature', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/culture_and_nature.html') }});
});

app.get('/connect_to_the_life', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/connect_to_the_life.html') }});
});

app.get('/transhumance', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/transhumance.html') }});
});

app.get('/transhumance_party', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/transhumance_party.html') }});
});

app.get('/kids_and_teens', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/kidsAndTeens.html') }});
});

app.get('/summer_camp_kids', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/summerCampKids.html') }});
});

app.get('/summer_camp_teens', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/summerCampTeens.html') }});
});

app.get('/summer_camp_veterans', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/summerCampVeterans.html') }});
});

app.get('/holidays_in_the_foundation', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/holidaysInTheFoundation.html') }});
});

app.get('/donate', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/donate.html') }});
});

app.get('/new_year', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/new_year.html') }});
});

app.get('/culture_and_nature_family', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/cultureAndNatureFamily.html') }});
});

app.get('/culture_and_nature_teens', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/cultureAndNatureTeens.html') }});
});

app.get('/communicate_with_horses', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/communicateWithHorses.html') }});
});

app.get('/nutrition', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/nutrition.html') }});
});

app.get('/lidership', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/lidership.html') }});
});

// OLD
app.get('/przewalski_project', function (req, res) {
	res.render('main', { partials: { template: path.join(__dirname, 'client/templates/przewalskiProject.html') }});
});

// SEO STUFF 
app.get('/sitemap.xml', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/xml/sitemap.xml'));
});

app.get('/robots.txt', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/txt/robots.txt'));
});

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
	content = new helper.Content("text/plain", "Nou soci \n \n Nom i cognoms: " + req.body.name + " \n \n " + "Població: " + req.body.city + " \n \n " + "Telèfon: " + req.body.phone + " \n \n " + "Email: " + req.body.email + " \n \n " + "Adreça: " + req.body.address + " \n \n " + "Quota: " + req.body.contribution + " \n \n " + "Número de compte: " + req.body.bankAccount + " \n \n " + "Titular del compte bancari: " + req.body.owner + " \n \n " + "Tipus de document: " + req.body.idType + " \n \n " + "Número: " + req.body.idNumber + " \n \n " + "Cavall: " + req.body.horse);
	mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function(error, response) {})

});
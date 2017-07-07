var CONTRIBUTIONS = [
	{
		value: 10,
		label: "10€"
	},
	{
		value: 20,
		label: "20€"
	},
	{
		value: 30,
		label: "30€"
	},
	{
		value: 40,
		label: "40€"
	},
	{
		value: 50,
		label: "50€"
	},
	{
		value: 60,
		label: "60€"
	},
	{
		value: 100,
		label: "100€"
	}
];

var ID_TYPES = [
	{
		value: "DNI",
		label: "DNI"
	},
	{
		value: "NIE",
		label: "NIE"
	},
	{
		value: "Passport",
		label: "Passaport"
	}
];

class CommerceForm {
	constructor() {
		this.title = ko.observable();
		this.sendText = ko.observable();
		this.notDoneYet = ko.observable(true);

		this.firstName = ko.observable();
		this.lastName = ko.observable();
		this.email = ko.observable();
		this.phone = ko.observable();
		this.address = ko.observable();
		this.contribution = ko.observable();
		this.disableContribution = ko.observable(false);
		this.availableContributions = ko.observableArray(CONTRIBUTIONS);

		this.selectedHorse = ko.observable();
		this.availableHorses = ko.observableArray(Horses.getNonSponsoredHorses());

		this.bankAccount = ko.observable();
		this.owner = ko.observable();

		this.idType = ko.observable("DNI");
		this.availableIdTypes = ko.observableArray(ID_TYPES);
		this.idNumber = ko.observable();
		this.showHorses = ko.observable(false);
	}

	send() {
		if (!this.firstName()) {
			return;
		}
		
		this.notDoneYet(false);
		var postService = ProjecteMiranda.postService("/new_partner", {}, () => {});

		postService({
			firstName: this.firstName(),
			lastName: this.lastName(),
			email: this.email(),
			phone: this.phone(),
			address: this.address(),
			contribution: this.contribution(),
			bankAccount: this.bankAccount(),
			owner: this.owner(),
			idType: this.idType(),
			idNumber: this.idNumber(),
			horse: this.selectedHorse()
		});

	}
}
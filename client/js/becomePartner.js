class BecomePartnerViewModel {
	constructor() {
		this.firstName = ko.observable();
		this.lastName = ko.observable();
		this.email = ko.observable();
		this.phone = ko.observable();
		this.address = ko.observable();
		this.contribution = ko.observable();
		this.availableContributions = ko.observableArray([
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
		]);

		this.bankAccount = ko.observable();
		this.owner = ko.observable();

		this.idType = ko.observable("DNI");
		this.availableIdTypes = ko.observableArray([
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
				label: "Passaprt"
			}
		]);

		this.idNumber = ko.observable("DNI");

		this.notPartnerYet = ko.observable(true);
	}

	becomePartner() {
		this.notPartnerYet(false);
		var aa = ProjecteMiranda.postService("/parse", {}, () => {
			console.log("callbk");
		});

		aa();

	}
}
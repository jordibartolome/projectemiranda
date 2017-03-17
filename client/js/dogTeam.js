class DogTeamViewModel {
	constructor() {
		this.dogs = new Dogs();
		this.sponsoredDogs = ko.observableArray([]);
		this.nonSponsoredDogs = ko.observableArray([]);

		this.initialize();
	}

	createDogsLists() {
		// Sponsored dogs
		var nsh = this.dogs.getSponsoredDogs();
		for (let i = 0; i < nsh.length; i++) {
			this.sponsoredDogs.push(new AnimalCard(nsh[i]));
		}

		// Non sponsored dogs
		nsh = this.dogs.getNonSponsoredDogs();
		for (let i = 0; i < nsh.length; i++) {
			this.nonSponsoredDogs.push(new AnimalCard(nsh[i]));
		}
	}

	initialize() {
		this.createDogsLists();
	}
}
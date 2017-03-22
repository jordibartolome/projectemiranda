class OurHorsesViewModel {
	constructor() {
		this.sponsoredHorses = ko.observableArray([]);
		this.nonSponsoredHorses = ko.observableArray([]);

		this.initialize();
	}

	createHorsesLists() {
		// Sponsored horses
		var nsh = Horses.getSponsoredHorses();
		for (let i = 0; i < nsh.length; i++) {
			this.sponsoredHorses.push(new AnimalCard(nsh[i]));
		}

		// Non sponsored horses
		nsh = Horses.getNonSponsoredHorses();
		for (let i = 0; i < nsh.length; i++) {
			this.nonSponsoredHorses.push(new AnimalCard(nsh[i]));
		}
	}

	initialize() {
		this.createHorsesLists();
	}
}
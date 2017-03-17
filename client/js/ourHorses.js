class OurHorsesViewModel {
	constructor() {
		this.horses = new Horses();
		this.sponsoredHorses = ko.observableArray([]);
		this.nonSponsoredHorses = ko.observableArray([]);

		this.initialize();
	}

	createHorsesLists() {
		// Sponsored horses
		var nsh = this.horses.getSponsoredHorses();
		for (let i = 0; i < nsh.length; i++) {
			this.sponsoredHorses.push(new AnimalCard(nsh[i]));
		}

		// Non sponsored horses
		nsh = this.horses.getNonSponsoredHorses();
		for (let i = 0; i < nsh.length; i++) {
			this.nonSponsoredHorses.push(new AnimalCard(nsh[i]));
		}
	}

	initialize() {
		this.createHorsesLists();
	}
}
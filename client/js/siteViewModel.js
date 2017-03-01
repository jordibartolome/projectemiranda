class SiteViewModel {
	constructor() {
		this.menuItems = ko.observableArray([]);
		this.nonSponsoredHorses = ko.observableArray([]);

		this.becomePartner = new BecomePartnerViewModel();
		this.visits = new VisitsViewModel();

		// Camps
		this.summerCampKids = new SummerCampKidsViewModel();
		this.summerCampTeens = new SummerCampTeensViewModel();

		this.initialize();
	}

	createMenu() {
		for (var i = 0; i < Menu.length; i++) {
			this.menuItems.push(new MenuItem(Menu[i]));
		}
	}

	createHorsesLists() {
		for (var i = 0; i < NonSponsoredHorses.length; i++) {
			this.nonSponsoredHorses.push(new AnimalCard(NonSponsoredHorses[i]));
		}
	}

	initialize() {
		this.createMenu();
		this.createHorsesLists();
	}
}
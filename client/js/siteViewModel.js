class SiteViewModel {
	constructor() {
		this.menuItems = ko.observableArray([]);

		// Models
		this.ourHorses = new OurHorsesViewModel();
		this.dogTeam = new DogTeamViewModel();

		// View models
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

	initialize() {
		this.createMenu();
	}
}
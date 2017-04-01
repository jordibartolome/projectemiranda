class SiteViewModel {
	constructor() {
		this.menuItems = ko.observableArray([]);

		// Models
		this.ourHorses = new OurHorsesViewModel();
		this.dogTeam = new DogTeamViewModel();
		this.animal = new AnimalInfo();

		// View models
		this.becomePartner = new BecomePartnerViewModel();
		this.sponsor = new Sponsor();
		this.visits = new VisitsViewModel();
		this.footer = new Footer();
		this.press = new Press();

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
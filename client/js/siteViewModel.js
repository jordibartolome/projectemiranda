class SiteViewModel {
	constructor() {
		this.menuItems = ko.observableArray([]);

		// Models
		this.ourHorses = new OurHorsesViewModel();
		this.dogTeam = new DogTeamViewModel();
		this.animal = new AnimalInfo();

		// View models
		this.home = new Home();
		this.becomePartner = new BecomePartnerViewModel();
		this.sponsor = new Sponsor();
		this.visits = new VisitsViewModel();
		this.meetUs = new MeetUsViewModel();
		this.holidaysAndRelax = new HolidaysAndRelaxViewModel(this.menuItems);
		this.cultureAndNature = new CultureAndNatureViewModel();
		this.transhumance = new TranshumanceViewModel();
		this.footer = new Footer();
		this.press = new Press();
		this.donate = new Donate();
		this.holidaysInTheFoundation = new HolidaysInTheFoundation()

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

	initializeSite() {
		// Check if elements are present 
		let divElement = $("#homePage")[0];
		if (!divElement) {
			setTimeout(() => {
				this.initializeSite();
			}, 50);
			return;
		}

		// Localize the site
		$("[data-localize]").localize("static/resources/site", { language: PM.locale() });
	}
}
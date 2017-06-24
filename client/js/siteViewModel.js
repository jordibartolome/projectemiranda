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
		this.footer = new Footer();
		this.press = new Press();
		this.donate = new Donate();

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

	changeLanguage(lang) {
		setCookie("language", lang, 10000);
		location.reload();
	}

	initialize() {
		this.createMenu();
	}

	initializeSite() {
		// Localize the site
		var lang = getCookie("language");
		if (!lang) {
			lang = "ca";
		}

		setTimeout(() => {
			$("[data-localize]").localize("static/resources/site", { language: lang });
		}, 300);	
	}
}
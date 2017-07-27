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
		this.holidaysAndRelax = new HolidaysAndRelaxViewModel(this.getMenuItemsById.bind(this));
		this.connectToTheLife = new ConnectToTheLifeViewModel();
		this.cultureAndNature = new CultureAndNatureViewModel();
		this.transhumance = new TranshumanceViewModel();
		this.footer = new Footer();
		this.press = new Press();
		this.donate = new Donate();
		this.holidaysInTheFoundation = new HolidaysInTheFoundation()

		// Camps
		this.kidsAndTeens = new KidsAndTeensViewModel(this.getMenuItemsById.bind(this));
		this.summerCampKids = new SummerCampKidsViewModel();
		this.summerCampTeens = new SummerCampTeensViewModel();

		this.initialize();
	}

	createMenu() {
		for (var i = 0; i < Menu.length; i++) {
			this.menuItems.push(new MenuItem(Menu[i]));
		}
	}

	getMenuItemsById(id) {
		for (var i = 0; i < this.menuItems().length; i++) {
			let item = this.menuItems()[i];
			if (item.id() == id) {
				return item.items();
			}

			if (item.floatingMenu()) {
				for (var j = 0; j < item.floatingMenu().items().length; j++) {
					if (item.floatingMenu().items()[j].id() == id) {
						return item.floatingMenu().items()[j].floatingMenu().items();
					}
				}
			}
		}

		return [];
	}

	initialize() {
		this.createMenu();
	}

	initializeSite() {
		// Check if elements are present 
		let divElement = $("#whoAreWe")[0];
		if (!divElement) {
			setTimeout(() => {
				this.initializeSite();
			}, 50);
			return;
		}

		// Localize the site
		localize.translate("ca")
			.then(function(){
				localize.translate(PM.locale())
					.then(function () {
					  console.log("Done localizing!");
					})
		});
	}
}
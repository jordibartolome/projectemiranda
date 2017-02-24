const Menu = [
	{
		title: "Què fem?",
		subtitle: "La nostra filosofia",
		href: "/#!/start",
		floatingMenu: {
			items: [
				{
					title: "Santuari de cavalls",
					href: "/#!/horses_sanctuary",
				},
				{
					title: "Tasca social",
					href: "/#!/social_contribution",
				},
				{
					title: "La cuina",
					href: "/#!/kitchen",
				}
			]
		}
	},
	{
		title: "Els nostres cavalls",
		subtitle: "Coneix-los a tots",
		href: "/#!/our_horses"
	},
	{
		title: "Dog team",
		subtitle: "Els nostres gossos",
		href: "/#!/dog_team"
	},
	{
		title: "Activitats",
		subtitle: "Com ens pots conèixer?",
		href: "/#!/meet_us",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Visites solidàries",
					href: "/#!/visits",
				},
				{
					title: "Trobades de socis",
					href: "/#!/partner_meetings",
				},
				{
					title: "Transhumància",
					href: "/#!/transhumance",
				},
				{
					title: "Campaments d'estiu (6-13 anys)",
					href: "/#!/summer_camp_kids",
				},
				{
					title: "Camp de treball d'estiu (13-17 anys)",
					href: "/#!/summer_camp_teens",
				},
			]
		}
	},
	{
		title: "Col·labora",
		subtitle: "Necessitem la teva ajuda",
		href: "/#!/collaborate",
		floatingMenu: {
			items: [
				{
					title: "Fes-te soci",
					href: "/#!/become_partner",
				},
				{
					title: "Fes-te voluntari",
					href: "/#!/become_volunteer",
				},
				{
					title: "Apadrina",
					href: "/#!/transhumance",
				},
				{
					title: "Dóna",
					href: "/#!/donate",
				},
				{
					title: "A què destinem la teva aportació?",
					href: "/#!/how_we_spend_donations",
				},
				{
					title: "Teaming",
					href: "https://www.teaming.net/www-projectemiranda-cat",
					target: "_blank"
				},
			]
		}
	},
	{
		title: "Blog",
		subtitle: "",
		href: "/blog"
	},
	{
		title: "Dóna",
		subtitle: "Ajuda'ns",
		href: "/#!/donate",
		highlighted: true
	}
];

class SiteViewModel {
	constructor() {
		this.tab = ko.observable("whatDoWeDo");

		this.menuItems = ko.observableArray([]);
		this.nonSponsoredHorses = ko.observableArray([]);

		this.becomePartner = new BecomePartnerViewModel();
		this.visits = new VisitsViewModel();

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
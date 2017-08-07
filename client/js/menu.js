const Menu = [
	{
		title: "Fundació Miranda",
		subtitle: "La nostra filosofia",
		id: "fundacioMiranda",
		href: "/#!/start",
		floatingMenu: {
			items: [
				{
					title: "Qui som?",
					href: "/#!/team",
				},
				{
					title: "On som?",
					href: "/#!/where",
				},
				{
					title: "Premsa",
					href: "/#!/press",
				},
				{
					title: "Contacta",
					href: "/#!/contact",
				}
			]
		}
	},
	{
		title: "Activitats",
		subtitle: "Com ens pots conèixer?",
		id: "activities",
		href: "/#!/meet_us",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Un dia entre cavalls lliures",
					href: "/#!/visits",
				},
				{
					title: "Estades i retirs",
					id: "holidaysAndRelax",
					href: "/#!/holidays_and_relax",
					floatingMenu: {
						items: [
							{
								title: "Connecta't a la vida",
								href: "/#!/connect_to_the_life",
								id: "connectToTheLife"
							},
							{
								title: "Vacances entre cavalls lliures",
								href: "/#!/holidays_in_the_foundation",
								id: "holidaysInTheFoundation"
							},
						]
					}
				},
				{
					title: "Infants i joves",
					id: "kidsAndTeens",
					href: "/#!/kids_and_teens",
					floatingMenu: {
						items: [
							{
								title: "Campaments d'estiu (6-13 anys)",
								href: "/#!/summer_camp_kids",
								id: "summerCampKids"
							},
							{
								title: "Camp de treball d'estiu (13-17 anys)",
								href: "/#!/summer_camp_teens",
								id: "summerCampTeens"
							},
						]
					}
				},
				{
					title: "Transhumància",
					href: "/#!/transhumance",
				},
			]
		}
	},
	{
		title: "Santuari de cavalls",
		subtitle: "Cavalls lliures",
		id: "sanctuary",
		href: "/#!/nature",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Un espai on els cavalls tornen a ser cavalls",
					href: "/#!/nature",
				},
				{
					title: "Els nostres cavalls",
					href: "/#!/our_horses",
				},
				{
					title: "Projecte Przewalski",
					href: "/#!/przewalski",
				},
				{
					title: "Dog team",
					href: "/#!/dog_team",
				},
			]
		}
	},

	{
		title: "Cultura i natura",
		subtitle: "Connecta't a la vida",
		id: "cultureAndNature",
		href: "/#!/culture_and_nature",
		floatingMenu: {
			items: [
				{
					title: "Projectes",
					href: "/#!/culture_and_nature",
				},
				{
					title: "Tasca social",
					href: "/#!/social_contribution",
				},
				{
					title: "La cuina de l'Orri",
					href: "/#!/kitchen",
				},
				{
					title: "Eòlia (Escola superior d'art dramàtic)",
					href: "http://www.eolia.cat",
					target: "_blank"
				},
			]
		}
	},
	{
		title: "Col·labora",
		subtitle: "Necessitem la teva ajuda",
		id: "collaborate",
		href: "/#!/collaborate",
		floatingMenu: {
			items: [
				{
					title: "Fes-te soci",
					href: "/#!/become_partner",
				},
				{
					title: "Apadrina",
					href: "/#!/sponsor",
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
					title: "Fes-te voluntari",
					href: "/#!/become_volunteer",
				},
				{
					title: "Teaming",
					href: "https://www.teaming.net/fundaciomiranda",
					target: "_blank"
				},
			]
		}
	},
	// {
	// 	title: "Blog",
	// 	subtitle: "",
	// 	href: "/blog"
	// },
	{
		title: "Dóna",
		subtitle: "Ajuda'ns",
		id: "donate",
		href: "/#!/donate",
		highlighted: true
	}
];
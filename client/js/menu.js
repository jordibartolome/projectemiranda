const Menu = [
	{
		title: "Fundació Miranda",
		subtitle: "La nostra filosofia",
		href: "/#!/start",
		floatingMenu: {
			items: [
				{
					title: "Santuari de cavalls",
					href: "/#!/horses_sanctuary",
				},
				{
					title: "Qui som?",
					href: "/#!/team",
				},
				{
					title: "On som?",
					href: "/#!/where",
				},
				{
					title: "Tasca social",
					href: "/#!/social_contribution",
				},
				{
					title: "La cuina",
					href: "/#!/kitchen",
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
		subtitle: "Coneix-los a tots",
		href: "/#!/our_horses",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Els nostres cavalls",
					href: "/#!/our_horses",
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
		subtitle: "Viu la natura",
		href: "/#!/culture_and_nature",
		floatingMenu: {
			items: [
				{
					title: "Eòlia (Escola superior d'art dramàtic)",
					href: "http://www.eolia.cat",
					target: "_blank"
				},
				{
					title: "Projectes",
					href: "/#!/culture_and_nature",
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
		href: "/#!/donate",
		highlighted: true
	}
];
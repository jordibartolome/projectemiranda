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
								title: "Cultura i natura",
								href: "/#!/culture_and_nature",
								id: "cultureAndNature"
							},
							{
								title: "Vacances al Pla de l'Orri",
								href: "/#!/holidays_in_the_foundation",
								id: "holidaysInTheFoundation"
							},
						]
					}
				},
				{
					title: "Campaments d'estiu (6-13 anys)",
					href: "/#!/summer_camp_kids",
				},
				{
					title: "Camp de treball d'estiu (13-17 anys)",
					href: "/#!/summer_camp_teens",
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
					href: "https://www.teaming.net/www-projectemiranda-cat",
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
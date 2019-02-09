const Menu = [
	{
		title: "Fundació Miranda",
		subtitle: "Valors",
		id: "fundacioMiranda",
		href: "/",
		floatingMenu: {
			items: [
				{
					title: "Qui som?",
					href: "/team",
				},
				{
					title: "On som?",
					href: "/where",
				},
				{
					title: "Premsa",
					href: "/press",
				},
				{
					title: "Contacta",
					href: "/contact",
				}
			]
		}
	},
	{
		title: "Calendari d'activitats",
		subtitle: "Com ens pots conèixer?",
		id: "activities",
		href: "/meet_us",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Cavalls",
					href: "/visits",
					floatingMenu: {
						items: [
							{
								title: "Un dia entre cavalls lliures",
								href: "/visits",
								id: "freeHorses"
							},
							// {
							// 	title: "Un dia entre cavalls lliures al Garraf",
							// 	href: "/visits_garraf",
							// 	id: "freeHorsesGarraf"
							// },
							// {
							// 	title: "Capvespre entre cavalls",
							// 	href: "/horses_evening",
							// 	id: "horsesEvening"
							// },
							{
								title: "Transhumància",
								href: "/transhumance",
								id: "transhumance"
							},
							{
								title: "Festa de la Transhumància",
								href: "/transhumance_party",
								id: "transhumanceParty"
							},
							// {
							// 	title: "Essència del Cavall",
							// 	href: "/essencia",
							// 	id: "essencia"
							// },
							// {
							// 	title: "Creant vincle de confiança amb el cavall",
							// 	href: "/vincles",
							// 	id: "vincles"
							// }
						]
					}
				},
				{
					title: "Estades i retirs",
					id: "holidaysAndRelax",
					href: "/holidays_and_relax",
					floatingMenu: {
						items: [
							// {
							// 	title: "Comunicació i lideratge amb cavalls lliures",
							// 	href: "/lidership",
							// 	id: "lidership"
							// },
							{
								title: "Constel·lacions amb cavalls",
								href: "/connect_to_the_life",
								id: "connectToTheLife"
							},
							// {
							// 	title: "Retir alimentació saludable",
							// 	href: "/nutrition",
							// 	id: "nutrition"
							// },
							// {
							// 	title: "Vacances entre cavalls lliures",
							// 	href: "/holidays_in_the_foundation",
							// 	id: "holidaysInTheFoundation"
							// },
							{
								title: "Acompanyament espiritual del dol",
								href: "/dol",
								id: "dol"
							},
						]
					}
				},
				{
					title: "Infants i joves",
					id: "kidsAndTeens",
					href: "/kids_and_teens",
					floatingMenu: {
						items: [
							// {
							// 	title: "Natura i cultura per pares amb fills adolescents",
							// 	href: "/culture_and_nature_teens",
							// 	id: "cultureAndNatureTeens"
							// },
							// {
							// 	title: "Convivència creativa amb cavalls i natura",
							// 	href: "/culture_and_nature_family",
							// 	id: "cultureAndNatureFamily"
							// },
							{
								title: "Campaments d'estiu (8-17 anys)",
								href: "/summer_camp_kids",
								id: "summerCampKids"
							},
							{
								title: "Camp de treball d'estiu (13-17 anys)",
								href: "/summer_camp_teens",
								id: "summerCampTeens"
							},
							// {
							// 	title: "Camp de veterans (a partir de 18 anys)",
							// 	href: "/summer_camp_veterans",
							// 	id: "summerCampVeterans"
							// },
						]
					}
				},

				// {
				// 	title: "Cap d'any",
				// 	href: "/new_year",
				// },
				// {
				// 	title: "Castanyada",
				// 	href: "/castanyada",
				// },
				// {
				// 	title: "Presentació Projecte Przewalski",
				// 	href: "/przewalski_project",
				// },
				// {
				// 	title: "Comunicació natural amb cavalls",
				// 	href: "/communicate_with_horses",
				// },
			]
		}
	},
	{
		title: "Santuari de cavalls",
		subtitle: "Cavalls lliures",
		id: "sanctuary",
		href: "/nature",
		floatingMenu: {
			wide: true,
			items: [
				{
					title: "Un espai on els cavalls tornen a ser cavalls",
					href: "/nature",
				},
				{
					title: "Els nostres cavalls",
					href: "/our_horses",
				},
				{
					title: "Dog team",
					href: "/dog_team",
				},
			]
		}
	},

	{
		title: "Projectes",
		subtitle: "Connecta't a la vida",
		id: "projects",
		href: "/culture_and_nature",
		floatingMenu: {
			items: [
				{
					title: "Transhumància",
					href: "/nomads",
				},
				{
					title: "Projecte Przewalski",
					href: "/przewalski",
				},
				{
					title: "Projecte Cultura i Natura",
					href: "/culture_and_nature",
				},
				{
					title: "Tasca social",
					href: "/social_contribution",
				},
				{
					title: "La cuina de la terra",
					href: "kitchen",
				},
				{
					title: "Eòlia",
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
		href: "/collaborate",
		floatingMenu: {
			items: [
				{
					title: "Fes-te soci",
					href: "/become_partner",
				},
				{
					title: "Apadrina",
					href: "/sponsor",
				},
				{
					title: "Dóna",
					href: "/donate",
				},
				{
					title: "A què destinem la teva aportació?",
					href: "/how_we_spend_donations",
				},
				{
					title: "Fes-te voluntari",
					href: "/become_volunteer",
				},
				{
					title: "Teaming",
					href: "https://www.teaming.net/fundaciomiranda",
					target: "_blank"
				},
			]
		}
	},
	{
		title: "Dóna",
		subtitle: "Ajuda'ns",
		id: "donate",
		href: "/donate",
		highlighted: true
	}
];
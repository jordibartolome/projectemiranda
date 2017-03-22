const HORSES = [
	{
		name: "Àsia",
		id: "asia",
		sponsored: false,
		snippet: "L’Àsia, filla de la Ushuaia, va néixer un matí de març del 2015, que el Pla de l’Orri era tot emblanquinat. Quan va néixer tenia el mateix color que un esquirol i ara és blanca com la neu, guapa i molt salvatge!",
		description: [
			"L’Àsia, filla de la Ushuaia, va néixer un matí de març del 2015, que el Pla de l’Orri era tot emblanquinat.",
			"Aquí la teniu el seu primer dia de vida fent amics...",
			"L’Àsia no s’acosta gaire a les persones, podriem dir que és esquerpa, que té por.. o simplement que no ha tingut aquesta necessitat i que ja en té prou amb viure en plenitut amb la seva familia equina.",
			"Quan va néixer tenia el mateix color que un esquirol i ara és blanca com la neu, guapa i molt salvatge!",
			"La vols apadrinar?"
		],
		totalImages: 3
	},
	{
		name: "Torp",
		id: "torp",
		sponsored: false,
		snippet: "El Torp, és el primer fill de l’Estrella. Una euga que vam rescatar ja fa molts anys, perquè s’havia trencat la cadera i l’anaven a sacrificar… L’Estrella es va recuperar i tot i que els veterinaris ens deien que no podria tenir fills amb la seva cadera torta, va poder ser mare d’aquest poltre negre preciós i ple de vida que va néixer lliure i fort el mes de juny del 2015.",
		description: [
			"El Torp, és el primer fill de l’Estrella. Una euga que vam rescatar ja fa molts anys, perquè s’havia trencat la cadera i l’anaven a sacrificar… L’Estrella es va recuperar i tot i que els veterinaris ens deien que no podria tenir fills amb la seva cadera torta, va poder ser mare d’aquest poltre negre preciós i ple de vida que va néixer lliure i fort el mes de juny del 2015.",
			"El Torp és un poltre molt tranquil, que un cop superada la petita por que li feien els humans, ara es deixa acariciar i es mostra molt receptiu.",
			"Vam operar el Torp fa uns mesos per tal que no hi hagi desequilibris entre els ramats. Veurem si s’acaba emancipant i integrant-se al ramat dels mascles solters o segueix visquent amb se mare i vinculat al seu gran ramat.",
			"Vols apadrinar el Torp? La seva energia t’alegrarà la vida!"
		],
		totalImages: 3
	},
	{
		name: "Múa",
		id: "mua",
		sponsored: false,
		snippet: "La Múa va néixer la primavera del 2016 a la muntanya d’Alinyà, concretament al Coll d’Ares, unes setmanes abans d’iniciar la transhumància de tornada cap al Pla de l’Orri.",
		description: [
			"La Múa va néixer la primavera del 2016 a la muntanya d’Alinyà, concretament al Coll d’Ares, unes setmanes abans d’iniciar la transhumància de tornada cap al Pla de l’Orri.",
			"La Múa és una poltra molt sociable i carinyosa. Igual que la seva cosina Pluja, ha tingut molta més curiositat que por cap a les persones, gossos, bicicletes... Filla de la Hatha, una euga que tot hi haver viscut lliure a les muntanyes de la Cerdanya Francesa força anys, té un caràcter ben diferent...",
			"La Múa te un germà que es diu Gàrrick i que ja té 4 anys. Tot i tenir un caràcter molt diferent a la Múa, la cuida i la protegeix des del primer dia de vida. Ara ja tenen un súper vincle familiar! (el vincle és el més important pels cavalls)",
			"La Múa serà segur una gran euga: forta, decidida, llesta, sensible i gran guia del seu futur ramat/família.",
			"Apadrína-la i posaràs força, alegria i puresa a la teva vida!"
		],
		totalImages: 4
	},
	{
		name: "Mandala",
		id: "mandala",
		sponsored: false,
		snippet: "La Mandala, una preciosa euga de 19 anys, va ser dels primers cavalls a arribar a la fundació ara ja fa 10 anys. El seu és el típic cas de cavall que malviu tancat en un box petit i sense quasi llum ni aire pur tot l’any i que només surt per fer classe. Fer classe vol dir que algú et puja a sobre, et posa un ferro a la boca i vulguis o no, hagis d’anar, passar i saltar per tots els llocs que aquest algú vol. I si aquest algú (com passa la majoria de les vegades) no sap muntar correctament, a cada pas et va donant cops a l’esquena i cada vegada que es desequilibra veus les estrelles per l’estrebada i el mal que et fa el filet que portes dins la boca. I els anomenen cavalls d’esport…",
		description: [
			"La Mandala, una preciosa euga de 19 any, va ser dels primers cavalls a arribar a la fundació ara ja fa 10 anys. El seu és el típic cas de cavall que malviu tancat en un box petit i sense quasi llum ni aire pur tot l’any i que només surt per fer classe. Fer classe vol dir que algú et puja a sobre, et posa un ferro a la boca i vulguis o no, hagis d’anar, passar i saltar per tots els llocs que aquest algú vol. I si aquest algú (com passa la majoria de les vegades) no sap muntar correctament, a cada pas et va donant cops a l’esquena i cada vegada que es desequilibra veus les estrelles per l’estrebada i el mal que et fa el filet que portes dins la boca. I els anomenen cavalls d’esport...",
			"Aquestes activitats tan estressants i poc respectuoses pel cavall, la manca de grup/família, la manca d’espai, l’alimentació totalment allunyada de la d’un herbívor, la competició i com no, les ferradures, van fer que la Mandala es lesionés molt jove. Als 8 anys de vida ja va petar i per sort, vam poder portar-la al seu paradís del Pla de l’Orri.",
			"La Mandala es va recuperar i curar físicament molt ràpidament. Pasturar tot el dia descalça i els massatges dels altres cavalls van ser com sempre el millor remei. Mentalment li va costar una mica més, ja que estava molt enfadada i amb moltes males experiències per netejar… però el vincle amb els altres cavalls i la llibertat van ser suficients. Ara mateix i després de fer la seva primera transhumància, està pasturant lliurement i amb el seu ramat, a les pastures d’hivern de La Vall de la Vansa (Alt Urgell)."
		],
		totalImages: 3
	},
	{
		name: "Pluja",
		id: "pluja",
		sponsored: false,
		snippet: "La Pluja va néixer al Pla de l’Orri i és la filla de la Llívia, una de les primeres eugues que va entrar a la fundació. La Pluja ens va sorprendre a tots quan només tenia dos o tres dies de vida. S’acostava a les persones com si les conegués. Sense por, sense nervis, sense prendre gaires precaucions. Com si ens conegués d’alguna altra vida…",
		description: [
			"La Pluja va néixer al Pla de l’Orri i és la filla de la Llívia, una de les primeres eugues que va entrar a la fundació. La Pluja ens va sorprendre a tots quan només tenia dos o tres dies de vida. S’acostava a les persones com si les conegués. Sense por, sense nervis, sense prendre gaires precaucions. Com si ens conegués d’alguna altra vida…",
			"El seu nom li vam posar perquè el dia que va néixer va ploure i feia moooolts dies que no ho feia!",
			"La veritat és que aporta molta alegria i força al grup! la seva empenta, el seu marcat caràcter decidit i fresc! Cavalls així ajuden als que tenen més pors, o passats amb males experiències amb humans, a tornar a confiar. També ajuden molt a les persones que ens visiten a les nostres trobades solidàries. Gran tasca social!",
			"Mireu-la descobrint la neu a la seva primera transhumància! No s’ho va pensar dues vegades, tal com la va veure si va rebolcar!",
			"Estem segurs que si l’apadrines creareu un fort vincle molt aviat i et donarà bona energia i moltes alegries."
		],
		totalImages: 3
	},
	{
		name: "Verema",
		id: "verema",
		sponsored: false,
		snippet: "La Verema va néixer el mes de setembre de 2015. S’assembla molt a la seva mare Picancel i amb tan sols tres mesets de vida ja va fer la seva primera transhumància. Gran aprenentatge per tots!",
		description: [
			"La Verema va néixer el mes de setembre de 2015. S’assembla molt a la seva mare Picancel i amb tan sols tres mesets de vida ja va fer la seva primera transhumància. Gran aprenentatge per tots!",			
			"Una poltra que ha tingut la sort de néixer en ramat, espai i harmonia i aporta la seva energia pura i tranquila al grup i a les persones que ens visiten.",
			"Amb la teva ajuda, la verema podrà viure feliç en un paradís i podreu fer-vos molt amics/es. Ja es veu que és un ésser especial i tot i les seves pors i les seves precaucions… és molt sociable!"
		],
		totalImages: 3
	},
	{
		name: "Anaiet",
		id: "anaiet",
		sponsored: false
	},
	{
		name: "Ushuaia",
		id: "ushuaia",
		sponsored: false
	},
	{
		name: "Catar",
		id: "catar",
		sponsored: false
	},
	{
		name: "Gaia",
		id: "gaia",
		sponsored: false
	},
	{
		name: "Picancel",
		id: "picancel",
		sponsored: false
	},
	{
		name: "Kashmir",
		id: "kashmir",
		sponsored: false
	},
	{
		name: "Bhangra",
		id: "bhangra",
		sponsored: false
	},

	{
		name: "Tuarèg",
		id: "tuareg",
		sponsored: true,
		sponsor: "Amparo"
	},
	{
		name: "Sioux",
		id: "sioux",
		sponsored: true,
		sponsor: "Laura"
	},
	{
		name: "Lance",
		id: "lance",
		sponsored: true,
		sponsor: "Vanesa"
	},
	{
		name: "Cadí",
		id: "cadi",
		sponsored: true,
		sponsor: "Dues famílies"
	},
	{
		name: "Nanàk",
		id: "nanak",
		sponsored: true,
		sponsor: "Maia"
	},
	{
		name: "Moreu",
		id: "moreu",
		sponsored: true,
		sponsor: "Jan"
	},
	{
		name: "Gataca",
		id: "gataca",
		sponsored: true,
		sponsor: "Esther Prades"
	},
	{
		name: "Àfrica",
		id: "africa",
		sponsored: true,
		sponsor: "Sus"
	},
	{
		name: "Dila",
		id: "dila",
		sponsored: true,
		sponsor: "Ester A."
	},
	{
		name: "Llívia",
		id: "llivia",
		sponsored: true,
		sponsor: "Xavi"
	},
	{
		name: "Sherpa",
		id: "sherpa",
		sponsored: true,
		sponsor: "Júlia"
	},
	{
		name: "Nigún",
		id: "nigun",
		sponsored: true,
		sponsor: "Albert"
	},
	{
		name: "Hatha",
		id: "hatha",
		sponsored: true,
		sponsor: "Neus"
	},
	{
		name: "Calaf",
		id: "calaf",
		sponsored: true,
		sponsor: "Clàudia"
	},
	{
		name: "Estrella",
		id: "estrella",
		sponsored: true,
		sponsor: "Ester"
	},
	{
		name: "Kippur",
		id: "kippur",
		sponsored: true,
		sponsor: "Cristina"
	},
	{
		name: "Spirit",
		id: "spirit",
		sponsored: true,
		sponsor: "Sílva, Ilana i Txell"
	}
];

const DOGS = [
	{
		name: "Broc",
		id: "broc",
		sponsored: false
	},
	{
		name: "Reiki",
		id: "reiki",
		sponsored: false
	},
	{
		name: "Jazz",
		id: "jazz",
		sponsored: true,
		sponsor: "Marina i Júla"
	},
	{
		name: "Kèfir",
		id: "kefir",
		sponsored: true
	},
	{
		name: "Lluna",
		id: "lluna",
		sponsored: true
	},
	{
		name: "Thai",
		id: "thai",
		sponsored: true,
		sponsor: "Timur"
	}
]

class Horses {
	constructor() {}

	static getSponsoredHorses() {
		var h = [];
		for (var i = 0; i < HORSES.length; i++) {
			if (HORSES[i].sponsored) {
				h.push(HORSES[i]);
			}
		}

		return h;
	}

	static getNonSponsoredHorses() {
		var h = [];
		for (var i = 0; i < HORSES.length; i++) {
			if (!HORSES[i].sponsored) {
				h.push(HORSES[i]);
			}
		}

		return h;
	}
}

class Dogs {
	constructor() {}

	getSponsoredDogs() {
		var h = [];
		for (var i = 0; i < DOGS.length; i++) {
			if (DOGS[i].sponsored) {
				h.push(DOGS[i]);
			}
		}

		return h;
	}

	getNonSponsoredDogs() {
		var h = [];
		for (var i = 0; i < DOGS.length; i++) {
			if (!DOGS[i].sponsored) {
				h.push(DOGS[i]);
			}
		}

		return h;
	}
}

class Animal {
	constructor() {}

	static getAnimalById(id) {
		for (var i = 0; i < HORSES.length; i++) {
			if (HORSES[i].id == id){
				return HORSES[i];
			}
		}

		for (var i = 0; i < DOGS.length; i++) {
			if (DOGS[i].id == id){
				return DOGS[i];
			}
		}

		return null;
	}
}
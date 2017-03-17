const HORSES = [
	{
		name: "Àsia",
		id: "asia",
		sponsored: false,
		snippet: "L’Àsia, filla de la Ushuaia, va néixer un matí de març del 2015, que el Pla de l’Orri era tot emblanquinat. Quan va néixer tenia el mateix color que un esquirol i ara és blanca com la neu, guapa i molt salvatge!"
	},
	{
		name: "Torp",
		id: "torp",
		sponsored: false,
		snippet: "El Torp, és el primer fill de l’Estrella. Una euga que vam rescatar ja fa molts anys, perquè s’havia trencat la cadera i l’anaven a sacrificar… L’Estrella es va recuperar i tot i que els veterinaris ens deien que no podria tenir fills amb la seva cadera torta, va poder ser mare d’aquest poltre negre preciós i ple de vida que va néixer lliure i fort el mes de juny del 2015."
	},
	{
		name: "Mua",
		id: "mua",
		sponsored: false
	},
	{
		name: "Mandala",
		id: "mandala",
		sponsored: false
	},
	{
		name: "Pluja",
		id: "pluja",
		sponsored: false
	},
	{
		name: "Verema",
		id: "verema",
		sponsored: false
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

	getSponsoredHorses() {
		var h = [];
		for (var i = 0; i < HORSES.length; i++) {
			if (HORSES[i].sponsored) {
				h.push(HORSES[i]);
			}
		}

		return h;
	}

	getNonSponsoredHorses() {
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
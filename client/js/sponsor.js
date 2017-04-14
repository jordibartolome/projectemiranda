class Sponsor {
	constructor() {
		this.form = new CommerceForm();
		this.form.title("Formulari per apadrinar un cavall");
		this.form.sendText("Apadrina!");
		this.form.contribution(60);
		this.form.showHorses(true);
		this.form.disableContribution(true);

		this.donateViewModel = new Donate();
	}

	donate () {
		this.donateViewModel.donate();
	}

	initialize() {
		var queryParams = window.location.href.split("?");
		if (queryParams.length == 1) {
			return;
		}

		var params = queryParams[1].split("=");
		if (params.length == 1) {
			return;
		}

		this.form.selectedHorse(params[1]);
	}
}
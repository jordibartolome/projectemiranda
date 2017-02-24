class VisitsViewModel {
	constructor () {

	}

	initializeOnPageLoad() {
		// Wait for KO to create the template
		setTimeout(() => {
			var calendar = new Calendar();
			calendar.show();
		}, 100)
	}
}
class VisitsViewModel {
	constructor () {

	}

	// Show calendar
	createCalendar() {
		new Calendar().show();
	}

	initializeOnPageLoad() {
		this.createCalendar();
	}
}
class VisitsViewModel {
	constructor () {
		this.calendar;
	}

	getCalendar() {
		return this.calendar;
	}

	// Show calendar
	createCalendar() {
		this.calendar = new Calendar();
		this.calendar.show();
	}

	initializeOnPageLoad() {
		this.createCalendar();
	}
}
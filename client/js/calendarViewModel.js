class CalendarViewModel {
	constructor (id) {
		this.calendar = new Calendar(id);
	}

	getCalendar() {
		return this.calendar;
	}

	// Show calendar
	createCalendar() {
		this.calendar.show();
	}

	initializeOnPageLoad() {
		this.createCalendar();
	}
}
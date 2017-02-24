class VisitsViewModel {
	constructor () {

	}

	createCalendar() {
		setTimeout(() => {
			if ($("#calendar")[0]) {
				var calendar = new Calendar();
				calendar.show();
			} else {
				this.createCalendar();
			}
		}, 100)
	}

	initializeOnPageLoad() {
		this.createCalendar();
	}
}
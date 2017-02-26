class SummerCampViewModel extends VisitsViewModel {
	constructor () {
		super();
	}

	// Show the date!
	setDefaultDate() {
		this.getCalendar().defaultDate("2017-06-01");
	}

	initialize() {
		if (!this.getCalendar().rendered()) {
			this.getCalendar().rendered.subscribe((val) => {
				if (val) {
					this.setDefaultDate();
				}
			});
		} else {
			this.setDefaultDate();
		}

	}

	initializeOnPageLoad() {
		this.createCalendar();
		this.initialize();
	}
}
class CampsViewModel extends VisitsViewModel {
	constructor (id) {
		super(id);
	}

	// Show the date - override
	setDefaultDate() {}

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
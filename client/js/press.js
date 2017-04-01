class Press {
	constructor () {
		this.visible = ko.observable(false);
	}

	// Press is expensive to load (many iframes). Do it when needed only.
	showPress() {
		this.visible(true);
	}
}
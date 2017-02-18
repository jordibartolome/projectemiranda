class SiteViewModel {
	constructor() {
		this.tab = ko.observable("whatDoWeDo");
	}

	switchTab(val) {
		this.tab(val);
	}
}
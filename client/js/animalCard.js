class AnimalCard {
	constructor(info) {
		this.id = ko.observable(info.id);
		this.name = ko.observable(info.name);
		this.sponsor = ko.observable(info.sponsor);
		this.snippet = ko.observable(info.snippet);
		this.expanded = ko.observable(false);

		this.imagePath = ko.computed(() => {
			return "/static/images/animals/" + this.id() + ".jpg";
		});
	}

	toggleExpand() {
		this.expanded(!this.expanded());
	}
}
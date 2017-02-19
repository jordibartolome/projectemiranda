class AnimalCard {
	constructor(info) {
		this.id = ko.observable(info.id);
		this.name = ko.observable(info.name);

		this.imagePath = ko.computed(() => {
			return "/static/images/animals/" + this.id() + ".jpg";
		});
	}

	goTo() {

	}
}
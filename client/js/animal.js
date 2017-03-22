class AnimalInfo {
	constructor(info) {
		this.id = ko.observable();

		this.name = ko.observable();
		this.sponsored = ko.observable();
		this.description = ko.observableArray([]);
		this.totalImages = ko.observable([]);

		this.firstImage = ko.computed(() => {
			return this.imagePath(1);
		});

		this.extraImages = ko.computed(() => {
			var res = [];
			for (var i = 2; i <= this.totalImages(); i++) {
				res.push(this.imagePath(i));
			}

			return res;
		});
		
		this.prepareAnimalToShow();
	}

	imagePath(num) {
		return "/static/images/animals/" + this.id() + num + ".jpg"
	}

	fillAnimalInfo(info) {
		this.name(info.name);
		this.description(info.description);
		this.totalImages(info.totalImages);
		this.sponsored(info.sponsored);
	}

	sponsor() {
		window.location.href = "/#!/sponsor";
	}

	prepareAnimalToShow() {
		var queryParams = window.location.href.split("?");
		if (queryParams.length == 1) {
			return;
		}

		var params = queryParams[1].split("=");
		if (params.length == 1) {
			return;
		}

		this.id(params[1]);
		var info = Animal.getAnimalById(this.id());
		if (info) {
			this.fillAnimalInfo(info);
		}
	}
}
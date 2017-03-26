class MenuItem {
	constructor(item) {
		this.title = ko.observable(item.title);
		this.subtitle = ko.observable(item.subtitle);
		this.href = ko.observable(item.href);
		this.highlighted = ko.observable(item.highlighted);

		this.fi = item.floatingMenu;
		this.floatingMenu = ko.observable();

		this.initialize();
	}

	handleMenuItemMouseover() {
		if (this.floatingMenu()) {
			this.floatingMenu().show();
		}
	}

	handleMenuItemMouseout() {
		if (this.floatingMenu()) {
			this.floatingMenu().tryToHide();
		}
	}

	createFloatingMenu() {
		if (this.fi) {
			this.floatingMenu(new FloatingMenu(this.fi));
		}
	}

	initialize() {
		this.createFloatingMenu();
	}
}

// Floating menu
class FloatingMenu {
	constructor(item) {
		this.fm = item;

		this.wide = ko.observable(item.wide);
		this.items = ko.observableArray([]);
		this.visible = ko.observable(false);

		this.isMouseHovering = false;

		this.initialize();
	}

	doTryToHide() {
		if (!this.isMouseHovering) {
			this.visible(false);
		}
	}

	tryToHide() {
		this.isMouseHovering = false;
		setTimeout(() => {
			this.doTryToHide();
		}, 200);
	}

	show() {
		this.visible(true);
		this.isMouseHovering = true;
	}

	handleFloatingMenuMouseover() {
		this.isMouseHovering = true;
	}

	handleFloatingMenuMouseout() {
		this.isMouseHovering = false;
		this.tryToHide();
	}

	createItems() {
		for (var i = 0; i < this.fm.items.length; i++) {
			this.items.push(new FloatingMenuItem(this.fm.items[i]));
		}
	}

	initialize() {
		this.createItems();
	}
}

// Each one of the floating items
class FloatingMenuItem {
	constructor(item) {
		this.title = ko.observable(item.title);
		this.href = ko.observable(item.href);
		this.target = ko.observable(item.target);
	}
}
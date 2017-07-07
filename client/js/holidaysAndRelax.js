const HOLIDAYS_AND_RELAX = "holidaysAndRelax";

class HolidaysAndRelaxViewModel extends CalendarViewModel {
	constructor (allItems) {
		super(HOLIDAYS_AND_RELAX);
		this.allItems = allItems;

		this.items = ko.computed(() => {
			for (var i = 0; i < this.allItems().length; i++) {
				let item = this.allItems()[i];
				if (item.id() == HOLIDAYS_AND_RELAX) {
					return item.items();
				}

				if (item.floatingMenu()) {
					for (var j = 0; j < item.floatingMenu().items().length; j++) {
						if (item.floatingMenu().items()[j].id() == HOLIDAYS_AND_RELAX) {
							return item.floatingMenu().items()[j].floatingMenu().items();
						}
					}
				}
			}

			return [];
		});
	}
}
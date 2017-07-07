const HOLIDAYS_AND_RELAX = "holidaysAndRelax";

class HolidaysAndRelaxViewModel extends CalendarViewModel {
	constructor (menuItems) {
		super(HOLIDAYS_AND_RELAX);
		this.mi = menuItems;

		this.items = ko.computed(() => {
			return this.mi(HOLIDAYS_AND_RELAX);
		});
	}
}
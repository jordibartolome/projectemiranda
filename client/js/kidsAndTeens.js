const KIDS_AND_TEENS = "kidsAndTeens";

class KidsAndTeensViewModel extends CampsViewModel {
  constructor (menuItems) {
    super(KIDS_AND_TEENS);
    this.mi = menuItems;

		this.items = ko.computed(() => {
			return this.mi(KIDS_AND_TEENS);
		});
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2017-06-01");
  }
}
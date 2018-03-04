class SummerCampVeteransViewModel extends CampsViewModel {
  constructor () {
    super("summerCampVeterans");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2018-08-01");
  }
}
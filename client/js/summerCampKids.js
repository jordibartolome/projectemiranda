class SummerCampKidsViewModel extends CampsViewModel {
  constructor () {
    super();
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2017-06-01");
  }
}
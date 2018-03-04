class SummerCampTeensViewModel extends CampsViewModel {
  constructor () {
    super("summerCampTeens");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2018-07-01");
  }
}
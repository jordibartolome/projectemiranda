class SummerCampTeensViewModel extends CampsViewModel {
  constructor () {
    super("summerCampTeens");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2017-07-01");
  }
}
class SummerCampTeensViewModel extends CampsViewModel {
  constructor () {
    super("summerCampTeens");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2019-07-01");
  }
}
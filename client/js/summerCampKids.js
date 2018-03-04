class SummerCampKidsViewModel extends CampsViewModel {
  constructor () {
    super("summerCampKids");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2018-06-01");
  }
}
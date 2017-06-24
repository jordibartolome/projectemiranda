class SummerCampKidsViewModel extends CampsViewModel {
  constructor () {
    super("summerCampKids");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2017-06-01");
  }
}
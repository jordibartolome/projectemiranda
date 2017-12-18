class CultureAndNatureTeensViewModel extends VisitsViewModel {
  constructor () {
    super("cultureAndNatureTeens");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2018-01-02");
  }
}
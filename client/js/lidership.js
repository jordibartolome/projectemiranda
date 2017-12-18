class LidershipViewModel extends VisitsViewModel {
  constructor () {
    super("lidership");
  }

  // Show the date!
  setDefaultDate() {
    this.getCalendar().defaultDate("2018-01-02");
  }
}
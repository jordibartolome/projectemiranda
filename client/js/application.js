class App {
  constructor() {
    this.siteViewModel = new SiteViewModel();
  }
}

ProjecteMiranda = new App();
PM = ProjecteMiranda;

$(function() {
  ko.applyBindings(ProjecteMiranda, $('.mainPage')[0]);
});

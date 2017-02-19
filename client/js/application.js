class App {
  constructor() {
    this.siteViewModel = new SiteViewModel();
  }
}

ProjecteMiranda = new App();
PM = ProjecteMiranda;

$(function() {
  if (location.pathname == "/" && location.hash === "") {
    location.href = "/#!/start";
  }
  // use #!/ instead of the default #
  pager.Href.hash = '#!/';
  // extend your view-model with pager.js specific data
  pager.extendWithPage(ProjecteMiranda);
  // apply the view-model using KnockoutJS as normal
  ko.applyBindings(ProjecteMiranda, $('.mainPage')[0]);
  // start pager.js
  pager.start();
});

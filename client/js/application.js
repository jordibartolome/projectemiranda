class App {
  constructor() {
    this.siteViewModel = new SiteViewModel();

    this.initialize();
  }

  createKOBindings() {
    ko.bindingHandlers['create'] = {
      init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor() || {};
        if (typeof value != "function") {
          throw new Error("The value for a create binding must be a function");
        }
        value.call(viewModel, element);
      }
    };

    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
        },
        update: function(element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
        }
    };
  }

  initialize () {
    this.createKOBindings();
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

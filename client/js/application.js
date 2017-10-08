class App {
  constructor() {
    this.siteViewModel = new SiteViewModel();
    this.layout = ko.observable();
    this.isPhoneLayout = ko.observable(false);
    this.locale = ko.observable("ca");

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

  // Calculate the current layout based on the window width
  calculateLayout() {
    var cssLayout = 'standard';
    var windowWidth = $(window).outerWidth() || 0;

    /* windowWidth values must be the same as that used for the phone.css media query in client_layout.html.erb */
    if (windowWidth < 500) {
      cssLayout = 'phoneVertical';
    }
    else if (windowWidth < 768) {
      cssLayout = 'phone';
    }
    else if (windowWidth < 1024) {
      cssLayout = 'mobile';
    }

    // Layout
    this.layout(cssLayout);

    // Phone layout
    if (cssLayout == "phone" || cssLayout == "phoneVertical") {
      this.isPhoneLayout(true);
    }
  }

  setLanguage() {
    let lang = getCookie("language");
    if (!lang) {
      lang = "ca";
    }

    this.locale(lang);
  }


  initialize () {
    this.createKOBindings();
    this.setLanguage();
    this.calculateLayout();
  }
}

ProjecteMiranda = new App();
PM = ProjecteMiranda;


$(function() {
  if (location.pathname == "/" && location.hash === "") {
    // location.href = "/#!/start";
  }
  // use #!/ instead of the default #
  // pager.Href.hash = '#!/';
  // extend your view-model with pager.js specific data
  // pager.extendWithPage(ProjecteMiranda);
  // apply the view-model using KnockoutJS as normal
  ko.applyBindings(ProjecteMiranda, $('.mainPage')[0]);
  // start pager.js
  // pager.start();
});

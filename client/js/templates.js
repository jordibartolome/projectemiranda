(function() {
  'use strict';

  var extTemplates = {};

  var dynamicTemplateFunctions = {
    text: function(value) {
     if (arguments.length === 0) {
       // If this template has not been loaded, grab it, starting with the explicit browser locale
       if (!this.loaded) {
         // to avoid console clutter during development, do resource lookups only if we are
         // working with a precompiled assets manifest that eliminates all the stray 404s.
         this.getTemplate("");
       }
       return this.template();
     }
     this.template(value);
    },

    data: function(key, value) {
      if (arguments.length === 1) {
          return this.template.data[key];
      }

      this.template.data[key] = value;
    }
  };

  ko.templateSources.AssetTemplate = function(template) {
    this.templateName = template;
    this.template = ko.observable(ko.templateSources.AssetTemplate.initialTemplate);
    this.template.data = {};
    this.loaded = false;
    this.inProgress = false;
  }

  // Configuration variable providing the text of a template to be used as an initial placeholder
  // until the real thing is loaded.
  ko.templateSources.AssetTemplate.initialTemplate = "";

  ko.utils.extend(ko.templateSources.AssetTemplate.prototype, dynamicTemplateFunctions);

  ko.utils.extend(ko.templateSources.AssetTemplate.prototype, {
    // Load this template from an external source, based on the locale given by lang.
    // If the template isn't found, try a more general locale if possible.
    getTemplate: function(lang) {
      var self = this;
      if (self.inProgress) {
        return;
      }
      self.inProgress = true;

      var localeDir = "/static/templates/", nextLang = "";
      if (lang) {
        localeDir = localeDir + "locale/" + lang + "/";
        if (lang.length == 5) {
          nextLang = lang.substring(0, 2);
        }
        else if (lang.length == 2) {
          nextLang = "";
        }
      }

      var urlName = this.templateName.replace(/^asset:/, "");
      var request = ProjecteMiranda.loadAsset(localeDir + urlName + ".html", { dataType: 'text' });

      request.done(function(data) {
        self.loaded = true;
        self.template(data);   // since template is observable, this triggers a rerender
      }).fail(function(request, errorText) {
        if (request.status == 404 && lang) {
          // Try the next most general locale
          self.inProgress = false;
          self.getTemplate(nextLang);
        }
        else if (request.status !== 0){
          // We don't have the option to fall back, generate an error template
          self.template('[<a href="' + request.url + '">'+ self.templateName + '</a>: ' + errorText + '(' + request.status + ')]');
        }
      });
    }
  });

  ko.templateSources.ItemTemplate = function(template) {
    this.templateName = template;
    this.template = ko.observable(ko.templateSources.ItemTemplate.initialTemplate);
    this.template.data = {};
    this.loaded = false;
    this.inProgress = false;
  }

  // Configuration variable providing the text of a template to be used as an initial placeholder
  // until the real thing is loaded.
  ko.templateSources.ItemTemplate.initialTemplate = "";

  ko.utils.extend(ko.templateSources.ItemTemplate.prototype, dynamicTemplateFunctions);

  ko.utils.extend(ko.templateSources.ItemTemplate.prototype, {
    // Load this template from an external source, based on the locale given by lang.
    // If the template isn't found, try a more general locale if possible.
    getTemplate: function(lang) {
      var self = this;
      if (self.inProgress) {
        return;
      }
      self.inProgress = true;

      var urlName = this.templateName.replace(/^item:/, "");
      var request = ProjecteMiranda.xhrRequest({
        url: '/content_item/' + encodeURIComponent(urlName),
        dataType: 'text'
      });

      request.done(function(data) {
        self.loaded = true;
        self.template(data);   // since template is observable, this triggers a rerender
      }).fail(function(request, errorText) {
        self.template('[<a href="' + request.url + '">'+ self.templateName + '</a>: ' + errorText + '(' + request.status + ')]');
      });
    }
  });

  // Make a KO template engine that loads external templates
  function createExtTemplateEngine(templateEngine) {
    templateEngine.makeTemplateSource = function(template) {
      // Canonicalize the template instance so that we don't instantiate multiple times after a reload.
      if (!extTemplates[template]) {
        if (template.match(/^item:/)) {
          extTemplates[template] = new ko.templateSources.ItemTemplate(template);
        }
        else {
          extTemplates[template] = new ko.templateSources.AssetTemplate(template);
        }
      }
      return extTemplates[template];
    }
    return templateEngine;
  }

  ko.setTemplateEngine(createExtTemplateEngine(new ko.nativeTemplateEngine()));
}());
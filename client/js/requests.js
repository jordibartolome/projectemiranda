(function() {
  'use strict';

  ProjecteMiranda.loadAsset = function (uri, options) {
    var url = uri;//NF.asset(uri)
    var jqxhr = $.ajax($.extend({
      url: url,
      type: 'GET'
    }, options));
    jqxhr.url = url;  // note the original URL in the returned jqXHR for error reporting purposes
    return jqxhr;
  };

  //cross domain requests
  ProjecteMiranda.xhrRequest = function(options) {
    var callback, deferred, failCallback, xdr, ajax, hostname;
    if (!options) options = {};

    var getHostname = function(href) {
        var l = document.createElement("a");
        l.href = href;
        return l.hostname;
    };

    var parseData = function(inData, type) {
      var outData;
      type = type.toLowerCase();

      if (type == 'json') {
        outData = JSON.parse(inData);
      } else if (type == 'xml') {
        outData = $.parseXML(inData);
      } else {
        outData = inData;
      }
      return outData;
    };

    hostname = getHostname(options.url)

    //ie <= 9 cors
    if (hostname != window.location.hostname &&
        hostname !== '' &&
        typeof XDomainRequest == 'function') {
      if (!options.type) options.type = 'get';
      xdr = new XDomainRequest(); 
      //these listeners are required to exist for some reason
      xdr.onload = function() {};
      xdr.onprogress = function(){};
      xdr.open(options.type, options.url);
      xdr.send();
    } else {
      ajax = $.ajax(options);
    }

    //jQuery style chained callbacks
    deferred = {
      done: function(newCallback) {
        if (xdr) {
          xdr.onload = function() {
            var data = parseData(xdr.responseText, options.dataType);
            newCallback(data)
          };
        }
        if (ajax) ajax.done(newCallback);
        return deferred;
      },
      fail: function(newCallback) {
        if (xdr) xdr.onerror = function() {
          newCallback(options, xdr.responseText);
        };
        if (ajax) ajax.fail(newCallback);
        return deferred;
      }
    }

    return deferred;
  };

  // Ensures a function isn't called more than once per X miliseconds.
  // Taken from Underscore.js.
  ProjecteMiranda.debounce = function(func, wait, immediate) {
    // 'private' variable for instance
    // The returned function will be able to reference this due to closure.
    // Each call to the returned function will share this common timer.
    var timeout;

    // Calling debounce returns a new anonymous function
    return function() {
      // reference the context and args for the setTimeout function
      var context = this,
        args = arguments;

      // Should the function be called now? If immediate is true
      //   and not already in a timeout then the answer is: Yes
      var callNow = immediate && !timeout;

      // This is the basic debounce behaviour where you can call this
      //   function several times, but it will only execute once
      //   [before or after imposing a delay].
      //   Each time the returned function is called, the timer starts over.
      clearTimeout(timeout);

      // Set the new timeout
      timeout = setTimeout(function() {

        // Inside the timeout function, clear the timeout variable
        // which will let the next execution run when in 'immediate' mode
        timeout = null;

        // Check if the function already ran with the immediate flag
        if (!immediate) {
          // Call the original function with apply
          // apply lets you define the 'this' object as well as the arguments
          //    (both captured before setTimeout)
          func.apply(context, args);
        }
      }, wait);

      // Immediate mode and no wait timer? Execute the function..
      if (callNow) func.apply(context, args);
    };
  };
}());
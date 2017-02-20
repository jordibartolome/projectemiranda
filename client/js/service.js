var GET_METHOD = "GET";
var POST_METHOD = "POST";
var JSON_CONTENT_TYPE = "application/json";
var FORM_CONTENT_TYPE = "application/x-www-form-urlencoded"; 
var JSON_DATA_TYPE = "json";

ProjecteMiranda.service = function(url, model, callback, options) {

	function isGet() {
		return options.type === GET_METHOD;
	}

	function isJsonContentType() {
		return options.contentType === JSON_CONTENT_TYPE;
	}

	// set up observables on the model if they don't exist yet.
	model.errors = model.errors || ko.observableArray();
	model.busy = model.busy || ko.observable(0);
	model.clearErrors = function() {
		model.errors([]);
	}
	
	// Return a service function.
	return function(data, requestOptions) {
		// initialize observables to reflect request-in-progress.
		if (!model.busy()) {
			model.errors([]); // clear errors if we are just initiating the first operation on this model
		}
		model.busy(model.busy() + 1); // bump active operation count
		
		// Set up the request data.
		data = $.extend({}, data,
			// Mix in predefined parameters supplied by the service definition's 'params' option
			options.params,
			 null);
		
		if (!isGet() && isJsonContentType()) {
			data = ko.toJSON(data);
		}

		// Construct options for the jQuery ajax function.
		var ajaxOpts = $.extend({}, options, { data: data });

		// Invoke the jqXHR object from the operation. Additional callbacks
		// can be attached to it if needed.
		var doRequest = function() {
			$.ajax(ajaxOpts)
				.done(function(responseData) {
					if (callback) {
						callback.call(model, responseData);
					}
					if (requestOptions && requestOptions.done) {
						requestOptions.done.call(model, responseData);
					}
				})
				.fail(function(request, errorText) {
					var errors = [];
					switch (request.status) {
						case 0: errors = [{code: 'serverNotReachable', message: 'The server could not be reached'}]; break;
						case 400:
							var data = $.parseJSON(request.responseText);
							errors = data.errors || data.error || [];
							if (!Array.isArray(errors)) {
								errors = [errors];
							}
							break;
						case 403: errors = [{code: 'permissionDenied', message: 'No permission to access service'}]; break;
						case 404: errors = [{code: 'notFound', message: 'Location not found'}]; break;
						case 500: errors = [{code: 'internalServerError', message: 'Internal server error'}]; break;
						default:  errors = [{code: 'httpError', message: 'HTTP Error ' + request.status.toString()}]; break;
					}

					$.each(errors, function(i, err) {
						// Localize messages to the best of our ability.
						provideMessageForError(err);
					});

					model.errors(model.errors().concat(errors))
					if (requestOptions && requestOptions.fail) {
						requestOptions.fail.call(model, errors);
					}
				})
				.always(function() {
					model.busy(model.busy() - 1);
					if (requestOptions && requestOptions.always) {
						requestOptions.always.call(model);
					}
				});
			};

		doRequest();
	};
};

ProjecteMiranda.postService = function(url, model, callback, options) {
	return ProjecteMiranda.service(url, model, callback, $.extend({
		url: url,
		type: POST_METHOD,
		contentType: JSON_CONTENT_TYPE,
		dataType: JSON_DATA_TYPE
	}, options));
};
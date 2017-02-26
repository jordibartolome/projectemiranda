var PARTNERS_VISIT_TEXT = "Socis i padrins";
var PARTNERS_VISIT_COLOR = '#378006';
var VISIT_TEXT = "Visita solidària";
var VISIT_COLOR = "#ea7900";
var EVERYONE_VISIT_TEXT = "Visita oberta";
var EVERYONE_VISIT_COLOR = "#0067ea";

var TYPES = [
	{
		type: "VISITS",
		color: "VISIT_COLOR",
		title: "VISIT_TEXT"
	},
	{
		type: "PARTNERS",
		color: "PARTNERS_VISIT_COLOR",
		title: "PARTNERS_VISIT_TEXT"
	},
	{
		type: "EVERYONE",
		color: "EVERYONE_VISIT_COLOR",
		title: "EVERYONE_VISIT_TEXT"
	}
]

var VISITS = [ 
	{
	  start  : '2017-02-21',
	  url: "http://jordibartolome.me",
	},
		{
	  start  : '2017-03-21',
	  url: "http://jordibartolome.me",
	},
];

var PARTNERS = [
	{
	  start  : '2017-02-24',
	  url: "http://jordibartolome.me",
	},
		{
	  start  : '2017-03-24',
	  url: "http://jordibartolome.me",
	},
];

var EVERYONE = [
	{
	  start  : '2017-02-19',
	  url: "http://jordibartolome.me",
	},
		{
	  start  : '2017-03-19',
	  url: "http://jordibartolome.me",
	},
];

var EVENTS = [];
class Calendar {
	constructor() {
		this.rendered = ko.observable(false);
	}

	createEventsList () {
		EVENTS = [];
		for (var j = 0; j < TYPES.length; j++) {
			for (var i = 0; i < window[TYPES[j].type].length; i++) {
				window[TYPES[j].type][i].title = window[TYPES[j].title];
				window[TYPES[j].type][i].color = window[TYPES[j].color];
				EVENTS.push(window[TYPES[j].type][i]);
			}
		}
	}

	render () {
		this.createEventsList();

		$('#calendar').fullCalendar({
			firstDay: 1,
			height: "parent",
			locale: 'ca',
			fixedWeekCount: false,
		  events: EVENTS
    });
	}

	defaultDate(date) {
		$('#calendar').fullCalendar("gotoDate", date);
	}

	show() {
		setTimeout(() => {
			if ($("#calendar")[0]) {
				this.render();
				this.rendered(true);
			} else {
				this.show();
			}
		}, 100)
	}
}
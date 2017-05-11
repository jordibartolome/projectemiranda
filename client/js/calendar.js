var PARTNERS_VISIT_TEXT = "Socis i padrins";
var PARTNERS_VISIT_COLOR = '#378006';
var VISIT_TEXT = "Visita solidària";
var VISIT_COLOR = "#ea7900";
var EVERYONE_VISIT_TEXT = "Visita oberta";
var EVERYONE_VISIT_COLOR = "#0067ea";
var SUMMER_CAMP_TEXT = "Campaments d'estiu";
var SUMMER_CAMP_COLOR = '#d8d305';
var WORK_CAMP_TEXT = "Camps de treball";
var WORK_CAMP_COLOR = "#86830a";

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
	},
	{
		type: "SUMMER_CAMP",
		color: "SUMMER_CAMP_COLOR",
		title: "SUMMER_CAMP_TEXT"
	},
	{
		type: "WORK_CAMP",
		color: "WORK_CAMP_COLOR",
		title: "WORK_CAMP_TEXT"
	}
]

var VISITS = [ 
	{
	  start  : '2017-05-21',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-06-17',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-08-05',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-08-26',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-09-10',
	  url: "http://jordibartolome.me",
	},
];

var PARTNERS = [
	{
	  start  : '2017-06-04',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-08-19',
	  url: "http://jordibartolome.me",
	},
	{
	  start  : '2017-09-03',
	  url: "http://jordibartolome.me",
	},
];

var EVERYONE = [
	// {
	//   start  : '2017-04-15',
	//   url: "http://jordibartolome.me",
	// },
	// {
	//   start  : '2017-04-30',
	//   url: "http://jordibartolome.me",
	// }
];

var SUMMER_CAMP = [
	{
	  start: '2017-06-25',
	  end: '2017-07-02',
	  url: "https://www.eventbrite.com/e/campaments-destiu-tickets-32205656987",
	},
	{
	  start: '2017-07-02',
	  end: '2017-07-09',
	  url: "https://www.eventbrite.com/e/campaments-destiu-tickets-32205657990",
	},
	{
	  start: '2017-07-09',
	  end: '2017-07-16',
	  url: "https://www.eventbrite.com/e/campaments-destiu-tickets-32205658993",
	}
];

var WORK_CAMP = [	
	{
	  start: '2017-07-16',
	  end: '2017-07-23',
	  url: "https://www.eventbrite.com/e/entradas-camp-de-vida-12-17-anys-32311224743",
	},
	{
	  start: '2017-07-23',
	  end: '2017-07-30',
	  url: "https://www.eventbrite.com/e/entradas-camp-de-vida-12-17-anys-32311225746",
	}
]

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
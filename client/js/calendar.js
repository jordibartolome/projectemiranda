var VISIT_TEXT = "Un dia entre cavalls lliures";
var VISIT_COLOR = "#378006";

var CONNECT_TO_THE_LIFE_TEXT = "Connecta't a la vida";
var CONNECT_TO_THE_LIFE_COLOR = '#ea7900';

var HOLIDAYS_IN_THE_FOUNDATION_TEXT = "Vacances entre cavalls lliures";
var HOLIDAYS_IN_THE_FOUNDATION_COLOR = '#1ab7d2';

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
		type: "CONNECT_TO_THE_LIFE",
		color: "CONNECT_TO_THE_LIFE_COLOR",
		title: "CONNECT_TO_THE_LIFE_TEXT"
	},
	{
		type: "HOLIDAYS_IN_THE_FOUNDATION",
		color: "HOLIDAYS_IN_THE_FOUNDATION_COLOR",
		title: "HOLIDAYS_IN_THE_FOUNDATION_TEXT"
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
	  start  : '2017-08-05',
	  url: "https://www.eventbrite.com/e/un-dia-entre-cavalls-lliures-tickets-35653965972",
	},
	{
	  start  : '2017-08-19',
	  url: "https://www.eventbrite.com/e/un-dia-entre-cavalls-lliures-tickets-35653966975",
	},
	{
	  start  : '2017-09-23',
	  url: "https://www.eventbrite.com/e/un-dia-entre-cavalls-lliures-tickets-35653967978"
	},
];

var CONNECT_TO_THE_LIFE = [
	{
	  start: '2017-08-25',
	  end: '2017-08-28',
	  url: "https://www.eventbrite.com/e/connectat-a-la-vida-tickets-35647822597",
	}
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
];

var HOLIDAYS_IN_THE_FOUNDATION = [
	{
	  start: '2017-08-04',
	  end: '2017-08-07',
	  url: "https://www.eventbrite.com/e/vacances-entre-cavalls-lliures-tickets-35774225672",
	},
]

var EVENTS = [];
class Calendar {
	constructor(id) {
		this.id = ko.observable(id);
		this.calendarId = ko.computed(() => {
			return "calendar-" + this.id();
		});
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

		$('#' + this.calendarId()).fullCalendar({
			firstDay: 1,
			height: "parent",
			locale: PM.locale(),
			fixedWeekCount: false,
		  events: EVENTS
    });
	}

	defaultDate(date) {
		$('#' + this.calendarId()).fullCalendar("gotoDate", date);
	}

	show() {
		setTimeout(() => {
			if ($('#' + this.calendarId())[0]) {
				this.render();
				this.rendered(true);
			} else {
				this.show();
			}
		}, 500)
	}
}
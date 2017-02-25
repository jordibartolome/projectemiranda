var PARTNERS_VISIT_TEXT = "Socis i padrins";
var PARTNERS_VISIT_COLOR = '#378006';
var VISIT_TEXT = "Visita solidària";
var VISIT_COLOR = "#ea7900";
var EVERYONE_VISIT_TEXT = "Visita oberta";
var EVERYONE_VISIT_COLOR = "#0067ea";

var EVENTS = [
	{
	  title  : PARTNERS_VISIT_TEXT,
	  start  : '2017-02-21',
	  url: "http://jordibartolome.me",
	  color:  PARTNERS_VISIT_COLOR,
	},
	{
	  title  : VISIT_TEXT,
	  start  : '2017-02-27',
	  url: "http://jordibartolome.me",
	  color:  VISIT_COLOR
	},
	{
	  title  : EVERYONE_VISIT_TEXT,
	  start  : '2017-02-28',
	  url: "http://jordibartolome.me",
	  color:  EVERYONE_VISIT_COLOR
	},
]

class Calendar {
	constructor() {}

	render () {
		$('#calendar').fullCalendar({
			firstDay: 1,
			height: "parent",
			locale: 'ca',
			fixedWeekCount: false,
		  events: EVENTS
    });
	}

	show() {
		setTimeout(() => {
			if ($("#calendar")[0]) {
				this.render();
			} else {
				this.show();
			}
		}, 100)
	}
}
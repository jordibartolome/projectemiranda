const TRANSITION_TIME = 4 * 1000;

class Home extends CalendarViewModel {
	constructor () {
		super("home");

		this.slideCount;
		this.slideWidth;
		this.slideHeight;
		this.sliderUlWidth;
		this.counter = 1;
		this.initialize();
	}

  moveRight() {
  	console.log("right!")
    var slideNum = this.counter++;
    if (slideNum < this.slideCount) {
      var transformSize = this.slideWidth * slideNum;
      document.querySelectorAll('.slider')[0].style.cssText = 
        "width:" + this.sliderUlWidth + "px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-" + transformSize + "px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-" + transformSize + "px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-" + transformSize + "px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";

    } else {
      this.counter = 1;
      document.querySelectorAll('.slider')[0].style.cssText = "width:" + this.sliderUlWidth + "px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)";
    }
  }

	slide() {
	  this.slideCount = document.querySelectorAll('.imageSlider').length;
	  this.slideWidth = document.querySelectorAll('.sliderContainer')[0].offsetWidth;
	  this.slideHeight = document.querySelectorAll(".sliderContainer")[0].offsetHeight;
	  this.sliderUlWidth = this.slideCount * this.slideWidth;

	  document.querySelectorAll('.slider')[0].style.cssText = "width:" + this.sliderUlWidth + "px";

	  for (var i = 0; i < this.slideCount; i++) {
	    document.querySelectorAll('.imageSlider')[i].style.cssText = "width:" + this.slideWidth + "px;height:" + this.slideHeight + "px";
	  }

	  setInterval(this.moveRight.bind(this), TRANSITION_TIME);
	}

	activitiesInfo() {
		window.location.href = "/meet_us";
	}

	transhumance() {
		window.location.href = "/transhumance";
	}


	cultureAndNature() {
		window.location.href = "/connect_to_the_life";
	}

	initialize() {
		if (document.getElementsByClassName("imageSlider").length > 0 &&
				document.querySelectorAll('.sliderContainer')[0].offsetWidth > 0) {
			this.slide();
		} else {
			setTimeout(this.initialize.bind(this), 100);
		}
	}
}
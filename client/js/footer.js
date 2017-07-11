class Footer {
  constructor () {
    this.email = ko.observable("");
    this.signupDone = ko.observable(false);
  }

  changeLanguage(lang) {
    setCookie("language", lang, 10000);
    location.reload();
  }

  goToFacebook() {
  	window.open("https://www.facebook.com/FundacioMiranda");
  }

  goToInstagram() {
  	window.open("https://www.instagram.com/fundacioprojectemiranda/");
  }

  goToYoutube() {
  	window.open("https://www.youtube.com/channel/UCWDaggExHgsw2IGF4ypLDKQ");
  }

  goToTwitter() {
  	window.open("https://twitter.com/@ProjecteMiranda");
  }
}
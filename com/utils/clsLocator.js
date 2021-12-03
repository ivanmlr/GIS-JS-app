
class clsLocator {

  constructor() {
    this.currentloop = 0;
    this.times = 0;
    this.locating = 0;
    this.startButton = document.getElementById("button");
    this.stopButton = document.getElementById("stop");
    this.contentDiv = document.getElementById("content");
    this.startButton.addEventListener("click", this.onclick.bind(this));
    this.stopButton.addEventListener("click", this.stopLoc.bind(this));
  }


  getLocation() {
    if (this.currentloop % 100 == 0 || this.currentloop == 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError.bind(this));
      } else {
        this.contentDiv.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    this.currentloop++;
    if (this.locating == 1) {
      window.requestAnimationFrame(this.getLocation.bind(this));
    }
  }

  showPosition(position) {

    console.log("locating...");
    let tA = new clsLocate
    tA.DrawPos(position)



  }

  showError(error) {
    let tA = new clsLocate
    tA.errorPos(error);
  }

  onclick() {
    console.log("ok");
    this.locating = 1;
    this.getLocation();
  }

  stopLoc() {
    this.locating = 0;
  }




}

class clsLocator {

  constructor() {
    this.x = "";
    this.currentloop = 0;
    this.times = 0;
    this.locating = 0;
    this.startButton = document.getElementById("button");
    this.stopButton = document.getElementById("stop");
    this.storeButton = document.getElementById("store");
    this.contentDiv = document.getElementById("content");
    this.today = "";
    this.date = "";
    this.array = [];
    this.location = "";
    this.startButton.addEventListener("click", this.onclick.bind(this));
    this.stopButton.addEventListener("click", this.stopLoc.bind(this));
    this.storeButton.addEventListener("click", this.storeData.bind(this));
    
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
    this.DrawPos(position)



  }

  showError(error) {
    
    errorPos(error);
  }

  onclick() {
    console.log("ok");
    this.locating = 1;
    this.getLocation();
  }

  stopLoc() {
    this.locating = 0;
  }

  DrawPos(position) {
    this.today = new Date();
    this.month = this.today.getMonth();
    this.month++;
    this.date = this.today.getFullYear()+"/"+this.month+"/"+this.today.getDate()+" "+this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    this.location = `${this.date},${position.coords.latitude},${position.coords.longitude}`;
    console.log(this.month);
    this.array.push(this.location);
    //this.content.innerHTML = this.array;
    //this.contentDiv.appendChild(this.content);
    
  }

  storeData(){
    this.x = new clsAjax("ws-storelocation.php", 1, "post",this.array)

  }

  errorPos(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.contentDiv.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        this.contentDiv.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        this.contentDiv.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        this.contentDiv.innerHTML = "An unknown error occurred."
        break;
    }
  }


}
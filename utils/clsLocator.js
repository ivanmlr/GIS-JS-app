
class clsLocator {

  constructor() {
    this.buttonDiv = document.getElementById("button");
    this.contentDiv = document.getElementById("content");
    this._Init(); 

  }


  _Init(){
    this._html_cell = document.createElement("button");
    this._html_cell.innerHTML = "Try it";
    this._html_cell.id = "getLoc";
    this._html_cell.addEventListener("click", this.onclick.bind(this));
    this.buttonDiv.appendChild(this._html_cell);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else {
      this.contentDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  showPosition(position) {
    let tA = new clsLocate;
    tA.Draw(position)

  }

  showError(error) {
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

  onclick(){
    console.log("ok");
    this.getLocation();
  }


}
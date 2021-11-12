
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
    tA.DrawPos(position)

  }

  showError(error) {
    let tA = new clsLocate;
    tA.errorPos(error);
  }

  onclick(){
    console.log("ok");
    this.getLocation();
  }


}
class clsLocate {
  constructor() {
    this.contentDiv = document.getElementById("content");


  }

  DrawPos(position) {
    this.content = document.createElement('p');
    this.content.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    this.contentDiv.appendChild(this.content);

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
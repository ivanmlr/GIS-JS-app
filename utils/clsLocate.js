class clsLocate {
    constructor() {
        this.contentDiv = document.getElementById("content");


    }

    Draw(position) {
        this._html_cell2 = document.getElementById("content");
        this._html_cell2.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;


    }

}
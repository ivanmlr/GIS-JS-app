class clsGeocode{
    constructor(){
      this.baseURL = `https://api.geoapify.com/v1/geocode/reverse?`
      this.result;
      this.serviceStatus = 0;

       
    }



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //GEOCODING
  call(lat,lon){
    var requestOptions = {
      method: 'GET',
    };
    
    fetch(`${this.baseURL}lat=${lat}&lon=${lon}&apiKey=11f811def0d74c7193c07fd79e4e196e`, requestOptions)
      .then(response => response.json())
      .then(result => this._parseJSON(result))
      .catch(error => console.log('error', error));

    


  }

  getData(field){

  }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  _parseJSON(result){
    this.sitio = result.features[0].properties.address_line1;
    this.direccion = result.features[0].properties.address_line2;
    this.tipo = result.features[0].properties.category;
    this.ciudad = result.features[0].properties.city;
    this.pais = result.features[0].properties.country;
    this.provincia = result.features[0].properties.county;
    this.region = result.features[0].properties.state;
    this.barrio = result.features[0].properties.suburb;

    console.log(this.direccion);



  }


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //GET DEVICE TYPE
  getUA( ){
    
    let device = "Unknown";
    const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    }
    Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
    return device;

  }

}
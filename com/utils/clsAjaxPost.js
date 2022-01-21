class clsAjaxPost {

    constructor(fichero,data) {
        this.xhttp = new XMLHttpRequest();
        this.event = new Event('clsAjax-onLoad'); //Add document.addEventListener('clsAjax-onLoad', this.MYMETHOD.bind(this), false); to the main class for this to work.
        this.data = data;
        console.log(this.data);
        this.fichero = fichero;
        this.xhttp.addEventListener("load", this._onLoad.bind(this), false);
        this.xhttp.addEventListener("error", this._onError.bind(this), false);
        this.xml = null;
        this.Execute();

    }
    
    /////////////////////////////////////////////////////////////////

    Execute() {
        this.xhttp.open('POST', this.fichero, true);
        this.xhttp.setRequestHeader("Content-Type", "text/csv");
        this.xhttp.send(this.data);
    }

    /////////////////////////////////////////////////////////////////

    _onLoad() {

        if (this.xhttp.readyState === this.xhttp.DONE) {
            if (this.xhttp.status === 200) {
                console.log(this.xhttp.responseText)
            }
        }
    };

    /////////////////////////////////////////////////////////////////

    _dispatchEvent() {
        document.dispatchEvent(this.event);


    }


    /////////////////////////////////////////////////////////////////


    GetValue(pnodeName) { //Call this method from a method on the main class to get xml tag (pnodeName) content.
        if (this.xml == null) {
            return;
        }
        return this.xml.getElementsByTagName(pnodeName)[0].childNodes[0].nodeValue;
    }

    /////////////////////////////////////////////////////////////////   


    _onError() {
        console.log("Document not loaded");
    }


}
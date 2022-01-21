class clsAjax {

    constructor(fichero, autoload, mode, data="nothing") {
        //COMMON
        this.xhttp = new XMLHttpRequest();
        this.onloadEvent = new Event('clsAjax-onLoad'); //Add document.addEventListener('clsAjax-onLoad', this.MYMETHOD.bind(this), false); to the main class for this to work.
        this.executeEvent = new Event('execute');
        this.fichero = fichero;
        this.xhttp.addEventListener("load", this._onLoad.bind(this), false);
        this.xhttp.addEventListener("error", this._onError.bind(this), false);
        this.xhttp.addEventListener("readystatechange", this._onChange.bind(this), false);
        this.call_status = this.xhttp.readyState;
        this.err_num = [];
        this.err_description = [];
        this.autoload = autoload;
        this.errorloop = 0;
        this.err_retry_time = 500;
        this.max_err_tries = 5;
        this.mode = mode;
        this.try = 0;

        //GET
        this.xml = null;


        //POST
        this.contentType = "text/csv";
        this.data = data;
        console.log(this.data);

        //EXECUTION
        if (this.autoload == true) {
            this.Execute();
        
        }
        else {

            document.addEventListener("execute", this.Execute.bind(this), false);

        }

    }

    /////////////////////////////////////////////////////////////////

    DoServerCall() {
        document.dispatchEvent(this.executeEvent);
    }

    /////////////////////////////////////////////////////////////////

    Execute() {
        if (this.mode == "get"){
            this.xhttp.open('GET', this.fichero, true);
            this.xhttp.send(null);
        }
        else if (this.mode == "post"){
            this.xhttp.open('POST', this.fichero, true);
            this.xhttp.setRequestHeader("Content-Type", this.contentType);
            this.xhttp.send(this.data);
        }

    }


    /////////////////////////////////////////////////////////////////

    _onLoad() {
        
        if (this.xhttp.readyState === this.xhttp.DONE) {
            if (this.xhttp.status === 200) {
                this.xml = this.xhttp.responseXML;
                this._dispatchEvent();
            }
            else {
                this._fileError();
            }
        }
    };

    /////////////////////////////////////////////////////////////////

    _dispatchEvent() {
        document.dispatchEvent(this.onloadEvent);
        console.log("OK");

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
        console.log("ERROR EN LA LLAMADA");
    }

    //////////////////////////////////////////////////////////////////


    _fileError() {

        if (this.errorloop % this.err_retry_time == 0 && this.try < this.max_err_tries) {
            this.try++
            this.err_num.push(this.xhttp.status);
            this.err_description.push(this.xhttp.response);
            this.Execute();

        }

        this.errorloop++
        if (this.try < this.max_err_tries) {
    
            window.requestAnimationFrame(this._fileError.bind(this));
        }

    }

    //////////////////////////////////////////////////////////////////

    _onChange(){
        this.call_status = this.xhttp.readyState;
    }
}
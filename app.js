(function(){
    "use strict";

    var PassGen = function(){
        // SINGLETON PATTERN algus (3 rida)
        if(PassGen.instance){
            return PassGen.instance;
        }
        PassGen.instance = this;

        this.passwords = []; //massiiv genereeritud paroolide jaoks
        this.passwordLength = null; // tellitud paroolide pikkus

        //ul kuhu pistame paroole
        this.container = document.querySelector('#container');

        //panen rakenduse tööle
        this.init();
    };

    //kõik põhifunktsioonid tulevad siia sisse ja saab kutsuda this.funktsiooniNimi()
    PassGen.prototype = {
        init: function(){
            console.log('rakendus käivitus');

            //kuulan nupuvajutust ja nupuvajutuse peale genereerin paroole
            document.querySelector('#generate').addEventListener('click', this.generatePasswords.bind(this));

        },
        generatePasswords: function(event){

            // console.log(event);

            //8 või 16
            this.passwordLength = document.querySelector('#pass-length').value;

            console.log('genereerin ' + this.passwordLength);

        },

    };

    // lehe laadimisel käivitame
    window.onload = function(){
        var app = new PassGen();
        window.app = app;
    };

})();

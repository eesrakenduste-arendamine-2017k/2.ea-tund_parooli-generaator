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

            // tühjendan vanad paroolid
            this.passwords = [];

            var count = 10;

            for (var i = 0; i < count; i++) {

                var wordLength = null;
                if(this.passwordLength == 8){
                    wordLength = 6;
                }else if(this.passwordLength == 16){
                    wordLength = 12;
                }

                var randomIndex = Math.round(Math.random()*words[wordLength].length-1);
                var password = words[wordLength][randomIndex];
                console.log(password);

                this.passwords.push(crypt(password));
            }

            this.printPasswords();

        },
        printPasswords: function(){

            var container = this.container;

            container.innerHTML = "";

            this.passwords.forEach(function(password, key){

                //container.innerHTML += "<li>" + password + "</li>";

                var element = document.createElement("li");
                element.innerHTML = password;

                container.appendChild(element);

                element.addEventListener("click", function(event){
                    console.log(event.target.innerHTML); // parooli
                    window.prompt("Vajuta ctrl+c või cmd+c ja siis enter", event.target.innerHTML);

                });

            });

        }

    };

    /* ABIFUNKSTIOONID (HELPER) */

    var crypt = function (word){

        var length = word.length; // 6, 12

        word = word.replace("i", '1');
        word = word.replace("o", '0');
        word = word.replace("s", '5');

        if(length == 6){
            // 6 > 8
            word += Math.round(Math.random()*10);
            word += Math.round(Math.random()*10);
        } else {
            // eeldan et 12
            // 12 > 16
            word += Math.round(Math.random()*10);
            word += Math.round(Math.random()*10);
            word += Math.round(Math.random()*10);
            word += Math.round(Math.random()*10);
        }

        return word;

    };

    //window.crypt = crypt;

    // lehe laadimisel käivitame
    window.onload = function(){
        var app = new PassGen();
        window.app = app;
    };

})();

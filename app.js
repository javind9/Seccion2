"use strict";
(function () {
    //funcion asignada a una variable
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    /*
    //misma funcion pero de flecha
    const miFuncion = ( a:string) => {
        return a.toUpperCase;
    }
    */
    //Funcion de flecha sin llaves
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    //smash método
    //Si pasamos todo esto a funcion de flecha deja de dar error
    /*
    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout( function() {
                console.log(`${ this.nombre } smash!!!`)
            }, 1000);
            
        }
    }
    */
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
    /*

    //Funcion tradicional
    function funcion2(a: string){
        return a;
    }

    */
})();

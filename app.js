"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Fernando';
    var apellido = 'Herrera';
    var edad = 33;
    //const salida = nombre + apellido + edad;
    //const salida = nombre + "" + apellido + " ( " + edad + " )";
    //const salida = `${nombre} \n${apellido} \n( ${edad} )`;
    var salida = "\n    " + nombre + " \n    " + apellido + " \n    ( " + getEdad() + " )";
    // Fernando Herrera (Edad: 33)
    console.log(salida);
})();

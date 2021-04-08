"use strict";
(function () {
    function activar(quien, momento, //? puede ser opcional
    objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activ\u00F3 la " + objeto + " en la " + momento + ".");
        }
        else {
            console.log(quien + " activ\u00F3 la " + objeto + ".");
        }
        // console.log(`${ quien } activó la ${ objeto }`);
    }
    activar('Gordon', 'tarde');
})();

(function(){
    
    function activar(   quien: string, 
                        momento?: string, //? puede ser opcional
                        objeto: string = 'batiseñal') { //valor por defecto   


        if (momento) {
            console.log (`${ quien } activó la ${ objeto } en la ${ momento }.`)
        } else {
            console.log (`${ quien } activó la ${ objeto }.`)
        }

        // console.log(`${ quien } activó la ${ objeto }`);
    }

    activar('Gordon','tarde');


    
})();



(function(){
    
    
    //funcion asignada a una variable
    const miFuncion = function(a: string){
        return a.toUpperCase();
    }
    

    /*
    //misma funcion pero de flecha
    const miFuncion = ( a:string) => {
        return a.toUpperCase;
    }
    */  

    //Funcion de flecha sin llaves
    const miFuncionF = (a:string) => a.toUpperCase();

    const sumarN = function (a:number, b:number){
        return a + b;
    }

    const sumarF = (a:number,b:number) => a+b;
    



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

    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout( () => {
                console.log(`${ this.nombre } smash!!!`)
            }, 1000);
            
        }
    }

    hulk.smash();

    /*

    //Funcion tradicional 
    function funcion2(a: string){
        return a;
    }

    */
    

})();



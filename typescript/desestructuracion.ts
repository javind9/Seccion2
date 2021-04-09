(() =>{
    const avenger = {
        nombre:'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    //Desestructuracion de arreglos
    const avengers: string[] = ['Thor','Ironman','Spiderman'];

    const [ , , arana ] = avengers; //especificando el orden

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log( thor);
        console.log( ironman);
        console.log( spiderman);
    }

    extraerArr( avengers );

    /*
    const extraerArr = (avenger: string[]) => {
        console.log( avengers[0]);
        console.log( avengers[1]);
        console.log( avengers[2]);
    }

    extraerArr( avengers );
    */
    //console.log(loki);
    //console.log(hombre);
    //console.log(arana);

    /*
    console.log( avengers[0]);
    console.log( avengers[1]);
    console.log( avengers[2]);
    */





    const extraer = ({nombre, poder}: any) => {
        
    
        console.log(nombre);
        console.log(poder);
    }
    // extraer ( avenger );
    


    /*
    const extraer = (avenger: any) => {
        const {nombre, clave} = avenger;
    
        console.log(nombre);
        console.log(clave);
    }
    extraer ( avenger );

    //Desestructuracion de objetos, creando constantes que vienen de las propiedades del avenger.
    const {nombre, clave} = avenger;
    
        console.log( nombre);
        console.log( clave);

    */




})();



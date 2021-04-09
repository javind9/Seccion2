"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= montoRetirar; //dineroActual = dineroActual - montoRetirar
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(dineroActual => console.log(`Me queda ${dineroActual}`))
        .catch(console.warn); //( err => console.warn(err));
})();

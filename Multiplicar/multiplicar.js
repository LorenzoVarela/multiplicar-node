/**
 * Multiplicar
 * */

// require
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = new Uint8Array(Buffer.from(''));

    console.log('========================================'.red);
    console.log(`=====  tabla de ${base}      ================`.red);
    console.log('========================================'.red);

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }
    console.log(data);
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = new Uint8Array(Buffer.from(''));

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve `tabla-${ base }.txt`;
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion)=>{
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `Clima en ${coors.direccion}  es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima ${direccion}`
    }
};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(argv.direccion))
;
// lugar.getLugarLatLng(argv.direccion)
// .then(resp=>{
//     console.log(resp)
// })
// .catch(e => console.log(e));

// console.log(argv.direccion);

// clima.getClima(9.9280694, -84.0907246)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e))
// ;


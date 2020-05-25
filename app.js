const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

//lugar.getLugarLatLng(argv.direccion)
//.then(console.log);

//clima.getClima(70.750000, -74.000000)
//.then(console.log)
//.catch(console.log);

const getInfo = async(direccion) => {

    try {
        const respLugar = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${respLugar.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1076ae084f059add429b8aa3ce468c81&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
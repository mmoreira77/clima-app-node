const axios = require('axios');

const getClima = async(lat, lng)=>{
    let resp = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f003bafc7b0e307d8f013680dc7e10d6`);
    return resp.data.main.temp;
};

module.exports = {
    getClima  
};
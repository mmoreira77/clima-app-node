const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBs07Yo_f1eroYD-wDq7cKdKZC4jiLFz4A`)


    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`NO hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coor = location.geometry.location;

    // console.log(JSON.stringify(resp.data, undefined, 2));            


    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }

}

module.exports = {
    getLugarLatLng
}
const axios = require('axios').default;
const {addCity} = require('../services/city.service.js');

const API_KEY = '868e126e2c0eda7df24d1fb7883f1e86';

const getMeteo = async (city) => {
    if (!city)
        throw {message: 'Parameter City missing', code:400};
    try {
        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        addCity(result.data);
        return result.data;
    } catch (error) {
        console.log(error)
        throw {message: error.message, code: error.response.status};
    }

}

module.exports = {
    getMeteo
}
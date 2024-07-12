const axios = require('axios');

exports.getWeather = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const city = 'London';

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
};

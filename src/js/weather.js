export default async function weather() {
  try {
    const userInput = document.getElementById('location').value;
    let input = '';
    if (userInput === '') {
      input = 'Tunisia';
    } else {
      input = userInput;
    }
    const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c0746535836a6d4327cd5fcea2ff7593`);
    const weatherObject = await currentWeather.json();
    document.getElementById('name').innerHTML = weatherObject.name;
    if (document.getElementById('type').value === 'C') {
      const temp = Math.round(weatherObject.main.temp - 273.15);
      const tempFeels = Math.round(weatherObject.main.feels_like - 273.15);
      document.getElementById('temprature').innerHTML = `${temp}${document.getElementById('type').value}°`;
      document.getElementById('feels').innerHTML = `${tempFeels}${document.getElementById('type').value}°`;
    } else {
      const temp = Math.round((((weatherObject.main.temp - 273.15) / 5)) * 9 + 32);
      const tempFeels = Math.round((((weatherObject.main.feels_like - 273.15) / 5)) * 9 + 32);
      document.getElementById('temprature').innerHTML = `${temp}${document.getElementById('type').value}°`;
      document.getElementById('feels').innerHTML = `${tempFeels}${document.getElementById('type').value}°`;
    }
    const timezone = weatherObject.timezone / 3600;
    if (timezone >= 0) {
      document.getElementById('date').innerHTML = `UTC+${timezone}`;
    } else {
      document.getElementById('date').innerHTML = `UTC${timezone}`;
    }
    document.getElementById('humidity').innerHTML = weatherObject.main.humidity;

    const conditionGifApi = await fetch(`http://api.giphy.com/v1/stickers/search?api_key=7DOBtFE3PDUY88lbr92uY85Agd1c5YbD&limit=1&q=${weatherObject.weather[0].main}`);
    const conditionGif = await conditionGifApi.json();
    document.getElementById('condition').src = conditionGif.data[0].images.original.url;
  } catch (msg) {
    document.getElementById('name').innerHTML = msg;
    document.getElementById('temprature').innerHTML = msg;
    document.getElementById('feels').innerHTML = msg;
    document.getElementById('date').innerHTML = msg;
    document.getElementById('humidity').innerHTML = msg;
  }
}

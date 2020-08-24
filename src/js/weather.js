export default async function weather() {
  const userInput = document.getElementById('location').nodeValue;
  let input = '';
  if (userInput === null) {
    input = 'London';
  } else {
    input = userInput;
  }
  const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c0746535836a6d4327cd5fcea2ff7593`);
  const weatherObject = await currentWeather.json();
  document.getElementById('name').innerHTML = weatherObject.name
}

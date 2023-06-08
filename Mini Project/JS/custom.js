let cityList = document.getElementById("city-names");
for (let city of cities) {
  let option = document.createElement("option");
  option.value = city.city;
  option.text = city.city;
  cityList.appendChild(option);
}

function createStationURL() {
  let stationURL = `https://api.weather.gov/points/${option.latitude},${option.longitude}`;

}
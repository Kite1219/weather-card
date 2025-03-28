import { getCity as data } from "./script.js";

class Ui {
  constructor() {
    this.weather = document.querySelector(`.weather`);
    this.icon = this.weather.querySelector(`.weather-icon`);
    this.message = document.querySelector(".annoucement");
  }

  loadingMessage() {
    this.message.style.display = 'block';
    this.message.innerHTML = "Loading...";
    this.clearHTML();
  }

  updateImage(weatherCondition) {
    if (this.icon === null) {
      this.icon = document.createElement("img");
      this.icon.className = "weather-icon";
    }
    this.icon.src = `images/${weatherCondition}.png`;
  }

  clearHTML() {
    this.weather.innerHTML = "";
  }

  updateInfo(degree, humidNum, windNum, cityName) {
    const icon = this.icon;

    // this.clearHTML();

    this.weather.prepend(this.icon);

    const celsiusDegree = (degree - 273.15).toFixed(2);
    const html = `
        <h1 class="temp">${celsiusDegree}°C</h1>
        <h2 class="city">${cityName}</h2>
        <div class="description">
            <div class="box1">
                <img src="images/humidity.png">
                <div class="box1-description">
                    <h1 class="percent">${humidNum}%</h1>
                    <h2 class="title">Humidity</h2>
                </div>
            </div>
            <div class="box2">
                <img src="images/wind.png">
                <div class="box2-description">
                    <h1 class="speed">${windNum} km/h</h1>
                    <h2 class="speed-description">Wind Speed</h2>
                </div>
            </div>
        </div>
    `;
    this.weather.insertAdjacentHTML("beforeend", html);
  }

  errorMessage(err) {
    this.message.style.display = "block";
    this.message.innerHTML = err;
    this.clearHTML();
  }
}

export const ui = new Ui();

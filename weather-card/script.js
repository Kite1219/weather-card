import * as config from "./config.js";
import { remote } from "./remote.js";
import { ui } from "./ui.js";

export async function getCity(cityName) {
  try {
    ui.loadingMessage();
    const getAPI = await fetch(config.apiUrl + cityName + config.apiKey);
    console.log(getAPI);
    if (getAPI.status === 404 || !getAPI.ok) throw `The City You Entered Is Not Found, please try again`;
    // else if (getAPI.status === 200) throw `You lost the internet`;
    const data = await getAPI.json();
    remote.clearMessage();
    console.log(data);
    ui.updateImage(data.weather[0].main.toLowerCase());
    ui.updateInfo(data.main.temp, data.main.humidity, data.wind.speed, data.name);
    
    return data;
  } catch (err) {
    ui.errorMessage(err);
  }
}


function init() {
  remote.searchButton_subscriber();
}
init();


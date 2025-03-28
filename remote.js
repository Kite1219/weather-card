import { getCity } from "./script.js";

class Remote {
  constructor() {
    this.searchButton = document.querySelector(".getInput");
    this.searchInput = document.getElementById("cityInput");
    this.message = document.querySelector(".annoucement");
  }

  clearMessage() {
    this.message.style.display = "none";
  }

  searchButton_subscriber() {
    this.searchButton.addEventListener("click", () => {
      this.clearMessage();
      const cityName = this.searchInput.value.trim();
      getCity(cityName);
      this.searchInput.value = ''
    });

    this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.clearMessage();
        this.message.style.display = "none";
        const cityName = this.searchInput.value.trim();
        getCity(cityName);
        this.searchInput.value = ''
      }
    });
  }
}

export const remote = new Remote();

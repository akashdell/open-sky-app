import React, { useState } from "react";
import "./Weather.css";
import WeatherDisplay from "./Components/WeatherDisplay";
import Forecast from "./Components/Forecast";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleRespsone(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: "Now"
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function newCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "4bcfbdb544c93af9fee3bcc561f8a283";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRespsone);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder=" Please enter a city..."
            onChange={newCity}
            className="SearchCity"
            autoFocus="on"
          />
          <input
            type="Submit"
            value="Search"
            readOnly
            className="btn-btn-success"
          />
        </form>

        <WeatherDisplay data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();

    return "Loading..";
  }
}

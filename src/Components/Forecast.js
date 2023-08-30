import React, { useState } from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";
import "./ForecastStyling.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <HourlyForecast data={forecast.list[0]} />
        <HourlyForecast data={forecast.list[1]} />
        <HourlyForecast data={forecast.list[2]} />
        <HourlyForecast data={forecast.list[3]} />
        <HourlyForecast data={forecast.list[4]} />
        <HourlyForecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "4bcfbdb544c93af9fee3bcc561f8a283";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);

    return null;
  }
}

/// icon is canvas eg. .Froecast canvas {display:bloc;} for styling.

import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahreneheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemp() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemp">
        <div className="hightemp">{props.celsius}</div>{" "}
        <a href="/" className="celsiusLink" onClick={displayCelsius}>
          {" "}
          °C
        </a>
        <a href="/" className="fahrenheitLink" onClick={displayFahreneheit}>
          | °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <div className="hightemp">{fahrenheitTemp()}</div>{" "}
        <a href="/" className="celsiusLink" onClick={displayCelsius}>
          {" "}
          °C
        </a>
        <a href="/" className="fahrenheitLink" onClick={displayFahreneheit}>
          | °F
        </a>
      </div>
    );
  }
}

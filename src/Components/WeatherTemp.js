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
    return (
      <div className="WeatherTemp">
        <div className="hightemp">
          {unit=== 'celsius'? props.celsius: fahrenheitTemp()}
        </div>{" "}
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

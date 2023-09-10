import React, { useEffect, useState } from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";
import "./ForecastStyling.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    let apiKey = "4bcfbdb544c93af9fee3bcc561f8a283";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    async function getForeCast() {
      const response = await axios.get(url).then();
      console.log("response hourly forecast>>>>>", response);
      setForecast(response.data);
      setLoaded(true);
    }
    getForeCast();
  },[])

  return(<div className="WeatherForecast row">
    {forecast?.list ?
      <>
        <HourlyForecast data={forecast.list[0]} />
        <HourlyForecast data={forecast.list[1]} />
        <HourlyForecast data={forecast.list[2]} />
        <HourlyForecast data={forecast.list[3]} />
        <HourlyForecast data={forecast.list[4]} />
        <HourlyForecast data={forecast.list[5]} />
      </>
      :
      ""
    }

  </div>)
}


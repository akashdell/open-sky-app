import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherDisplay(props) {
  return (
    <div class="bg-img">
      <div className="WeatherDisplay">
        <div className="row">
          <Icon code={props.data.icon} />
        </div>

        <div className="col">
          <div className="header">
            <h1 className="MainCity">{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <p className="MainDescription">{props.data.description}</p>

            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}

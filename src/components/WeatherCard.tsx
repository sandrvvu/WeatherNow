import { useState, useEffect } from "react";
import {
  BsUmbrellaFill,
  BsDropletFill,
  BsWind,
  BsSunrise,
  BsSunsetFill,
} from "react-icons/bs";
import { convertUnixTimestampToTime } from "../helpers/convertUnixTime";
import { Weather } from "../types";
import icons from "../assets/icons";

type WeatherCardProps = {
  data: Weather;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ data }: WeatherCardProps) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    };

    const today = new Date();
    const formatted = new Intl.DateTimeFormat("en-US", options).format(today);

    setFormattedDate(formatted);
  }, []);

  const sunriseTime = convertUnixTimestampToTime(data.sunrise);
  const sunsetTime = convertUnixTimestampToTime(data.sunset);

  return (
    <div className="weather-container">
      <div className="weather-container__date">
        <p>{formattedDate}</p>
      </div>

      <div className="weather-container__main">
        <div className="weather-container__main-icon">
          <img
            className="weather-container__icon"
            src={icons[data.icon as keyof typeof icons]}
            alt="weather icon"
          />
        </div>
        <div className="weather-container__main-data">
          <h1 id="temp-value" className="weather-container__temperature">
            {Math.round(data.temp)}
            <span>°C</span>
          </h1>
          <h1 id="weather-name" className="weather-container__description">
            {data.description}
          </h1>
        </div>
      </div>

      <div className="weather-container__info">
        <div className="weather-container__info-item">
          <BsUmbrellaFill />
          <div>
            <p className="weather-container__info-value">30 mm</p>
            <p className="weather-container__info-name">precipitation</p>
          </div>
        </div>

        <div className="weather-container__info-item">
          <BsWind />
          <div>
            <p className="weather-container__info-value">
              {data.wind_speed} km/h
            </p>
            <p className="weather-container__info-name">wind speed</p>
          </div>
        </div>

        <div className="weather-container__info-item">
          <BsDropletFill />
          <div>
            <p className="weather-container__info-value">{data.humidity} %</p>
            <p className="weather-container__info-name">humidity</p>
          </div>
        </div>
      </div>

      <div className="weather-container__sun-time">
        <div className="weather-container__sun-time-item">
          <BsSunrise />
          <p className="weather-container__sun-time-label">Sunrise time</p>
          <p className="weather-container__sun-time-value">{sunriseTime}</p>
        </div>
        <div className="weather-container__sun-time-item">
          <BsSunsetFill />
          <p className="weather-container__sun-time-label">Sunset time</p>
          <p className="weather-container__sun-time-value">{sunsetTime}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

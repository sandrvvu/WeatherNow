import React, { useState, useEffect } from "react";
import Searching from "./Searching";
import { useAppDispatch } from "../redux/hooks";
import { fetchWeather } from "../redux/weatherSlice";
import Location from "./Location";

const WeatherInput: React.FC = () => {
  const [city, setCity] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (city.trim() !== "") {
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  const handleSearchSubmit = (searchQuery: string) => {
    setCity(searchQuery);
    setShowSearch(false);
  };

  const handleLocationClick = () => {
    setCity("");
    setShowSearch(true);
  }

  return (
    <div className="weather-input__container">
      {showSearch ? (
        <Searching handleSearchSubmit={handleSearchSubmit} />
      ) : (
        <Location city={city} onLocationClick={handleLocationClick}/>
      )}
    </div>
  );
};

export default WeatherInput;

import React, { useEffect, useState } from "react";
//import useFetch from "@/hooks/useFetch";
import useFetchV2 from "@/hooks/useFetchV2";
import "@/styles/weatherApi.css";

const KEY = import.meta.env.VITE_WEATHER_API_KEY;

function WeatherApp() {
  const DEFAULT_CITY = "Chennai";
  const [city, setCity] = useState(DEFAULT_CITY);
  const [query, setQuery] = useState(DEFAULT_CITY);

  // ⏳ Debounce user typing
  useEffect(() => {
    const timeout = setTimeout(() => setQuery(city), 600);

    return () => clearTimeout(timeout);
  }, [city]);

  // 🧠 If input is empty, fallback to default
  const finalQuery = query.trim() === "" ? DEFAULT_CITY : query;

  // 🌦 Fetch weather data
  const { data, loading, error } = useFetchV2(
    `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${encodeURIComponent(
      finalQuery
    )}`
  );

  function renderError(message) {
    return <p className="error">⚠️ {message}</p>;
  }

  function renderLoading() {
    return <p>Loading...</p>;
  }

  function renderWeather() {
    return (
      <div className="flex flex-col items-center justify-center weather-card">
        <h2>{`${data?.location.name}, ${data?.location.country}`}</h2>
        <img
          src={`https:${data?.current?.condition?.icon}`}
          alt={data?.current?.condition?.text}
          className="weather-icon"
        />
        <p className="temperature">{Math.round(data?.current?.temp_c)}°C</p>
        <p className="condition">{data?.current?.condition?.text}</p>
        <div className="weather-details">
          <p>💧 {data?.current?.humidity}%</p>
          <p>💨 Wind: {data?.current?.wind_kph} km/h</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter city name"
              className="search-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        {loading && renderLoading()}

        {/* 🔹 Handle API + Hook errors */}
        {error && renderError(error)}
        {data?.error && renderError(data.error.message)}

        {!loading && !error && data && !data.error && renderWeather()}
      </div>
    </div>
  );
}

export default WeatherApp;

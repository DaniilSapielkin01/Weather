import React, { Component } from "react";

export const Weather = (props) => {
  const { weather } = props;
  return (
    <div>
      {weather.city ? (
        <div>
          <p>
            Местоположение: {weather.city} {weather.country}
          </p>
          <p>Температура: {weather.temp} </p>
          <p>Давдение: {weather.pressure} </p>
          <p>Заход солнца: {weather.sunset} </p>
        </div>
      ) : (
        <p>{weather.error}</p>
      )}
    </div>
  );
};

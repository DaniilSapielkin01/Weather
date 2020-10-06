import React from "react";
import { Form } from "./components/form";
import { Info } from "./components/info";
import { Weather } from "./components/weather";

const API_KEY = "4deafe8111b310bfddac18ed08135ebf";

export class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
   `);
      const data = await api_url.json();

      let sunset = data.sys.sunset;
      let newDate = new Date();
      newDate.setTime(sunset);
      let sunset_date =
        newDate.getHours() +
        ":" +
        newDate.getMinutes() +
        ":" +
        newDate.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города ! ",
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather weather={this.state} />
      </div>
    );
  }
}

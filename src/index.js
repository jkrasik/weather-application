import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import ShowWeather from './components/weather';
import ShowForecast from './components/weather_forecast';

const API_KEY = '37c5e0dcd44fad01164c69220ca568bf';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { cityWeather: [],
                   forecast: []
    };

  }

  getWeather(city) {
    console.log(city)
    fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => this.setState( { cityWeather: data }));
  }

  getWeatherForecast(city) {
    console.log(city)
    fetch(`//api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => this.setState( { forecast: data }));
    console.log(this.state)
  }

  render() {
      return(
        <div>
          <h1> A simple weather app </h1>
          <p> Checks the current weather using OpenWeatherMap API </p>

          <SearchBar sendWeather = { term => this.getWeather(term)}
                     sendForecast = { term => this.getWeatherForecast(term)} />
          <ShowWeather weather = {this.state.cityWeather} />
          <ShowForecast forecast = {this.state.forecast} />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

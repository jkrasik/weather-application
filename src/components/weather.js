import React from 'react';

const ShowWeather = (props) => {

  if(props.weather.main == undefined || props.weather.weather == undefined || props.weather.sys == undefined ){
    return(
      <div>Enter the name of the city to check the weather</div>
    )
  }

  return(


    <div>
      City: {props.weather.name}<br/>
      Country: {props.weather.sys.country}<br/>
      Temperature: {props.weather.main.temp}<br/>
      Cloudiness: {props.weather.weather[0].description}
    </div>
  );
}

export default ShowWeather;

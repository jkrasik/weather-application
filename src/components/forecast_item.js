import React from 'react';


const ForecastItem = (props) => {

  const date = props.data.dt_txt.split(' ')


  return(
    <li class = "xd">
    <div> {date[0]} </div>
    <div> Hour: {date[1]} </div>
    <div> Temperature: {props.data.main.temp} </div>
    <div> Cloudiness: {props.data.weather[0].description} </div>
    </li>

  );

}

export default ForecastItem;

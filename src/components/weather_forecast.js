import React from 'react';
import ForecastItem from "./forecast_item";


const ShowForecast = (props) => {
  if(props.forecast.list == undefined){
    return(
      <div>and forecast for the next 5 days</div>
    )
  }


  const listItems = props.forecast.list.map((forecast) => <ForecastItem data = {forecast} />);

  return(
    <ul>
      {listItems}
    </ul>
  );

}

export default ShowForecast;

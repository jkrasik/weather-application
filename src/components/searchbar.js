import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return(
      <div>
        <input onChange = { (event) => this.setState({ term: event.target.value }) }/>
        <button type = "button" onClick = { () => this.sendData()  }> Search </button>
      </div>
    );
  }

  sendData() {
    this.props.sendWeather(this.state.term);
    this.props.sendForecast(this.state.term);
  }

}

export default SearchBar;

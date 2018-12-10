import React, { Component } from "react";
import { feachCurrentWeather } from "../actions/currentWeatherAction";
import { feachForcast } from "../actions/forcastAction";
import { feachCity } from "../actions/selectedCityAction";
import { addtofevorite } from "../actions/fevoritesAction";

import Header from "./Header";
import "../App.css";

import { connect } from "react-redux";

class Station extends Component {
  constructor(props) {
    super(props)

    this.addToFevoriteClicked = this.addToFevoriteClicked.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.feachCity(id);
    this.props.feachCurrentWeather(id);
    this.props.feachForcast(id);
  }

  addToFevoriteClicked() {
    const id = this.props.match.params.id;
    this.props.addtofevorite(this.props.city)
  }

  renderCurrentWeather(currentWeather, city) {
    return (
      <div className="container">
        <ul className="list-inline">
          <div className="">
            <h3 className="float-center">Current weather in </h3>
            <div>
              <h4>{city.name}</h4>
              <br />
              <input
                type="button"
                value="Add to fevorite"
                onClick={this.addToFevoriteClicked}
              />
            </div>
          </div>
          {Object.keys(currentWeather).map(reading => (
            <li key={reading} className="list-inline-item">
              <span>{currentWeather[reading].time.slice(0, 10)}</span>
              <br />
              <span>@{currentWeather[reading].time.slice(11, 16)}</span>
              <div>{Math.round(currentWeather[reading].t2m)}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderForcastWeather(forcast) {
    return (
      <div className="container">
        <ul className="list-inline">
          <h3>Weather forcast for the next hours.</h3>
          {Object.keys(forcast).map(reading => (
            <li key={reading} className="list-inline-item ">
              <div>
                <span>@{forcast[reading].time.slice(11, 16)}</span>
              </div>
              <div>
                <span> {Math.round(forcast[reading].Temperature)}</span>
              </div>
              <div>
                <span>{Math.round(forcast[reading].Humidity)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { loading, currentWeather, error, forcast, city } = this.props;

    console.log(city);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>sorry ,There is some error </div>;
    }

    return (
      <div>
        <Header />
        {this.renderCurrentWeather(currentWeather, city)}
        {this.renderForcastWeather(forcast)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.currentWeather.loading,
  currentWeather: state.currentWeather.currentWeather,
  error: state.currentWeather.error,
  forcast: state.forcast.forcast,
  city: state.city.city
});

const mapActionToProps = {
  feachCurrentWeather,
  feachForcast,
  feachCity,
  addtofevorite
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(Station);

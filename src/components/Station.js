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
    super(props);
    this.state = {
      addedToFevorite: false,
      fevButtonValue: "Add to fevorite"
    };
    this.addToFevoriteClicked = this.addToFevoriteClicked.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.feachCity(id);
    this.props.feachCurrentWeather(id);
    this.props.feachForcast(id);
  }

  addToFevoriteClicked() {
    this.props.addtofevorite(this.props.city);
    let fevArray = [
      {
        id: this.props.city.fmisid,
        name: this.props.city.name
      }
    ];
    localStorage.setItem(this.props.city.fmisid, JSON.stringify(fevArray));
    this.setState({
      addedToFevorite: true,
      fevButtonValue: "Added"
    });
  }

  renderCurrentWeather(currentWeather, city) {
    let x = [];
    x.push(
      Object.keys(currentWeather).map(reading =>
        Math.round(currentWeather[reading].t2m)
      )
    );
    return (
      <div className="container weatherDisplay ">
        <div className=" float-center">
          <h4 className="">Current weather in </h4>
          <h5>{city.name}</h5>
          <h3>{JSON.stringify(x[0][0])}</h3>
          <input
            type="button"
            value={this.state.fevButtonValue}
            disabled={this.state.addedToFevorite}
            onClick={this.addToFevoriteClicked}
          />
        </div>
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
              <div>
                <img
                  className="forcastImg"
                  src={require("./symbols/" +
                    Math.round(forcast[reading].WeatherSymbol3) +
                    ".svg")}
                  alt="forcastimage"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { loading, currentWeather, error, forcast, city } = this.props;

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

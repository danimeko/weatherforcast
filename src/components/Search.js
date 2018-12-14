import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "../App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { feachStations } from "../actions/searchActions";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  componentDidMount() {
    this.props.feachStations();
  }

  getSuggestions(value) {
    const fliteredCities = this.props.cities;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : fliteredCities.filter(
          city => city.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion.name}</div>;
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, suggestion) => {
    
    const id = suggestion.suggestion.fmisid;
   
   this.props.history.push(`station/${id}`);
  };

  render() {
    const { value, suggestions } = this.state;
    
    const inputProps = {
      placeholder: "search city name",
      value,
      onChange: this.onChange
    };

    const { error, loading } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          highlightFirstSuggestion={true}
        />
      
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.stations.loading,
  cities: state.stations.cities,
  error: state.stations.error
});

const mapActionToProps = {
  feachStations
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(Search);

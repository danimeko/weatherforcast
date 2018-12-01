import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import api from "../api/Api";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
      cities: []
    };
  }
  getSuggestions(value) {
    const fliteredCities = this.state.cities;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : fliteredCities.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion.name}</div>;
  }

  componentDidMount() {
    this.feachStation();
  }

  feachStation() {
    api.getStations().then(res =>
      this.setState({
        cities: res.toJS()
      })
    );
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
  render() {
    console.log(this.state.cities);
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type a programming language",
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;

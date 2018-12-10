import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import currentWeatherReducer from "./currentWeatherReducer"
import forcastReducer from "./forcastReducer"
import selectedCityReducer from "./selectedCityReducer"
import fevoritesReducer from "./fevoritesReducer";

export default combineReducers({
    stations: searchReducer,
    currentWeather: currentWeatherReducer,
    forcast: forcastReducer,
    city: selectedCityReducer,
    fevorite: fevoritesReducer
});

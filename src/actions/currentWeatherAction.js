import { feach_currentWeather, feach_begin, feach_failure } from "./types.js";
import api from "../api/Api";

//featch current weather action it despach when it begin and on sucess and failure  
export function feachCurrentWeather(id) {
  return dispatch => {
    dispatch(fetchBegin());
    return api
      .getCurrentWeather(id)
      .then(res => {
        dispatch(fetchSuccess(res.toJS()));
      })
      .catch(error => dispatch(fetchFailure(error)));
  };
}

// begin action 
export const fetchBegin = () => ({ type: feach_begin });

// success action and it has payload of current weather for given city id
export const fetchSuccess = currentWeather => ({
  type: feach_currentWeather,
  payload: { currentWeather: currentWeather }
});

//failure action
export const fetchFailure = error => ({
  type: feach_failure,
  payload: { error }
});

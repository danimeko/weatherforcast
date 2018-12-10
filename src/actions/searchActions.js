//import FEACH_CITIES from "./types.js";
import api from "../api/Api";

const feach_stations = "FEACH_STATIONS";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

export  function feachStations() {
  return dispatch => {
    dispatch(fetchBegin())
    return api.getStations()
      .then(res => {
        dispatch(fetchSuccess(res.toJS()));
      })
    .catch (error => dispatch(fetchFailure(error)));
   } 

}

export const fetchBegin = () => ({ type: feach_begin });

export const fetchSuccess = cities => ({ type: feach_stations, payload: { cities: cities } });

export const fetchFailure = error => ({ type: feach_failure, payload: { error } });
import { feach_stations, feach_begin, feach_failure } from "./types.js";
import api from "../api/Api";

export function feachStations() {
  return dispatch => {
    dispatch(fetchBegin());
    return api
      .getStations()
      .then(res => {
        dispatch(fetchSuccess(res.toJS()));
      })
      .catch(error => dispatch(fetchFailure(error)));
  };
}

export const fetchBegin = () => ({ type: feach_begin });

export const fetchSuccess = cities => ({
  type: feach_stations,
  payload: { cities: cities }
});

export const fetchFailure = error => ({
  type: feach_failure,
  payload: { error }
});

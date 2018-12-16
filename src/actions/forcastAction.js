import api from "../api/Api";

import { feach_forcast, feach_begin, feach_failure } from "./types.js";

export function feachForcast(id) {
  return dispatch => {
    dispatch(fetchBegin());
    return api.getStationsDetails(id).then(res =>
      api
        .getForcast(res.toJS().name)
        .then(res => {
          dispatch(fetchSuccess(res.toJS()));
        })
        .catch(error => dispatch(fetchFailure(error)))
    );
  };
}

export const fetchBegin = () => ({ type: feach_begin });

export const fetchSuccess = forcast => ({
  type: feach_forcast,
  payload: { forcast: forcast }
});

export const fetchFailure = error => ({
  type: feach_failure,
  payload: { error }
});

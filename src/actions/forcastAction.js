import api from "../api/Api";

import { feach_forcast, feach_begin, feach_failure } from "./types.js";

//featch city weather forcast  action it despach when it begin and on sucess and failure  

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
// begin action
export const fetchBegin = () => ({ type: feach_begin });
// forcast action
export const fetchSuccess = forcast => ({
  type: feach_forcast,
  payload: { forcast: forcast }
});
// failer action
export const fetchFailure = error => ({
  type: feach_failure,
  payload: { error }
});

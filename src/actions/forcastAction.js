import api from "../api/Api";

const feach_forcast = "FEACH_FORCAST";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";


export function feachForcast(id) {
    return dispatch => {
        dispatch(fetchBegin())
        return api
            .getStationsDetails(id)
            .then(res =>
                
               ( api.getForcast(res.toJS().name)).then(res => {
                                dispatch(fetchSuccess(res.toJS()));
                                      })
          .catch(error => dispatch(fetchFailure(error))))
    }

}

export const fetchBegin = () => ({ type: feach_begin });

export const fetchSuccess = forcast => ({ type: feach_forcast, payload: { forcast: forcast } });

export const fetchFailure = error => ({ type: feach_failure, payload: { error } });


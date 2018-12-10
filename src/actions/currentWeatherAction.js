import api from "../api/Api";

const feach_currentWeather = "FEACH_CURRENTWEATHER";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";


export function feachCurrentWeather(id) {
    return dispatch => {
        dispatch(fetchBegin())
        return api
          .getCurrentWeather(id)
          .then(res => {
            dispatch(fetchSuccess(res.toJS()));
          })
          .catch(error => dispatch(fetchFailure(error)));
    }

}

export const fetchBegin = () => ({ type: feach_begin });

export const fetchSuccess = currentWeather => ({ type: feach_currentWeather, payload: { currentWeather: currentWeather } });

export const fetchFailure = error => ({ type: feach_failure, payload: { error } });
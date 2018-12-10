const feach_currentWeather = "FEACH_CURRENTWEATHER";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

const intitalState = {
  loading: false,
  currentWeather: [],
  error: null
};

export default function currentWeatherReducer(state = intitalState, action) {
  switch (action.type) {
    case feach_begin:
      return {
        ...state,
        loading: true,
        error: null
      };
    case feach_currentWeather:
      return {
        ...state,
        currentWeather: action.payload.currentWeather,
        loading: false
      };
    
    case feach_failure:
      return {
        ...state,
        loading: null,
        error: action.payload.error
      };
    default:
      return state;
  }
}

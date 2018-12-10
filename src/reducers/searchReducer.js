const feach_stations = "FEACH_STATIONS";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

const intitalState = {
  loading: false,
  cities: [],
  error: null
};

export default function searchReducer(state = intitalState, action) {
  switch (action.type) {
    case feach_stations:
      return {
        ...state,
        cities: action.payload.cities,
        loading: false
      };
    case feach_begin:
      return {
        ...state,
        loading: true,
        error: null
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

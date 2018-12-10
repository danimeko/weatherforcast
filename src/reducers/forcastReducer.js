const feach_forcast = "FEACH_FORCAST";
const feach_begin = "FEACH_BEGIN";
const feach_failure = "FEACH_FAILURE";

const intitalState = {
  loading: false,
  forcast: [],
  error: null
};

export default function forcastReducer(state = intitalState, action) {
  switch (action.type) {
    case feach_begin:
      return { ...state, loading: true, error: null };
    case feach_forcast:
      return { ...state, forcast: action.payload.forcast, loading: false };

    case feach_failure:
      return { ...state, loading: null, error: action.payload.error };
    default:
      return state;
  }
}

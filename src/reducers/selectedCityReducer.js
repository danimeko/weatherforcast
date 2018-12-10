const selected_city = "SELECTED_CITY";

const initialState = {
  city: ""
};

export  default function selectedCityReducer(state = initialState, action) {
  switch (action.type) {
    case selected_city:
      return {
        city: action.payload.city
      };

    default:
      return state;
  }
}

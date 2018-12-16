import api from "../api/Api";

import { selected_city } from "./types.js";

export function feachCity(id) {
  return dispach => {
    return api
      .getStationsDetails(id)
      .then(res => dispach(selectedCity(res.toJS())));
  };
}

export const selectedCity = selectedcity => ({
  type: selected_city,
  payload: { city: selectedcity }
});

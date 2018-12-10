import api from "../api/Api"

const selected_city = "SELECTED_CITY";

export function feachCity(id) {
    return dispach => {
        return api.getStationsDetails(id)
            .then(res => dispach(selectedCity(res.toJS())))
    }
}

export const selectedCity = selectedcity => ({ type: selected_city, payload: { city: selectedcity } }); 
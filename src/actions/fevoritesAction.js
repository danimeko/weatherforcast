const add_to_fevorite = "ADDTOFEVORITE";

export function addtofevorite(cityObj) {
    return {
        type: add_to_fevorite,
        payload: cityObj
    };
}

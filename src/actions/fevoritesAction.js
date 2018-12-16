import { add_to_fevorite } from "./types.js";

export function addtofevorite(cityObj) {
  return {
    type: add_to_fevorite,
    payload: cityObj
  };
}

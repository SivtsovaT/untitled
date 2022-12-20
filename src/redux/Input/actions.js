import {inputValueTypes} from "./types";

export const setValue = (value) => {
    return {
        type: inputValueTypes.setValue,
        payload: value
    }
};

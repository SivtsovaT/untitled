import {inputValueTypes} from "./types";

const initialState = {
    inputText: ''
};

export const inputValue = (state = initialState, action) => {
    switch (action.type) {
        case inputValueTypes.setValue:
            return {
                ...state,
                inputText: action.payload
            }
        default:
            return state
    }
};

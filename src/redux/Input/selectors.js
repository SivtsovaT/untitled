export const getInputData = (state) => state.inputValue;

export const getInputValueSelector = (state) => {
    const { inputText } = getInputData(state);
    return inputText;
}

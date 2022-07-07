const loadingReducer = (state = true, { type, payload }) => {
    switch (type) {
        case "SET_LOADING":
            return payload;
        default:
            return state;
    }
};
export default loadingReducer;

const queryReducer = (state = "", { type, payload }) => {
    switch (type) {
        case "SET_QUERY":
            return payload;
        default:
            return state;
    }
};
export default queryReducer;

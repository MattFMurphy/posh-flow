const propertiesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH_DATA":
            return payload;
        default:
            return state;
    }
};
export default propertiesReducer;

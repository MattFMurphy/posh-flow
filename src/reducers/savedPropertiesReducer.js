const savedPropertiesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "SET_SAVED_PROPERTIES":
            return payload;
        default:
            return state;
    }
};
export default savedPropertiesReducer;

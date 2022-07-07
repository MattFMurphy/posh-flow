const toggleShowFavouritesReducer = (state = false, { type, payload }) => {
    switch (type) {
        case "TOGGLE_SHOW_FAVOURITES":
            return payload;
        default:
            return state;
    }
};
export default toggleShowFavouritesReducer;

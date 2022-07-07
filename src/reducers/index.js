import { combineReducers } from "redux";

import propertiesReducer from "./propertiesReducer";
import loadingReducer from "./loadingReducer";
import savedPropertiesReducer from "./savedPropertiesReducer";
import queryReducer from "./queryReducer";
import toggleShowFavouritesReducer from "./toggleShowFavouritesReducer";

export default combineReducers({
    properties: propertiesReducer,
    loading: loadingReducer,
    savedProperties: savedPropertiesReducer,
    query: queryReducer,
    showFavourites: toggleShowFavouritesReducer,
});

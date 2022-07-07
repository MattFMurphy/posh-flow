const setQuery = term => {
    return { type: "SET_QUERY", payload: term };
};

export default setQuery;

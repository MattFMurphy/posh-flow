// const fetchPropertyData = async () => {
//     const response = await fetch('/property-data.json');
//     const json = await response.json();

//     setProperties(json.result.properties.elements);
//   };

//   fetchPropertyData();

const fetchData = () => async dispatch => {
    const response = await fetch("/property-data.json");
    const json = await response.json();

    dispatch({ type: "FETCH_DATA", payload: json.result.properties.elements });
};

export default fetchData;

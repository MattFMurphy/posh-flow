import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FaSpinner } from "react-icons/fa";

import Header from "./Header";
import PropertyCard from "./PropertyCard";

import { setLoading, fetchData } from "./actions";

const App = props => {
    const { setLoading, fetchData, loading, properties, query, showFavourites } = props;
    const [error, setError] = useState(false);

    // use this state to keep track of the user's saved/bookmarked properties
    const [savedProperties, setSavedProperties] = useState([]);

    const filterProperties = properties => {
        return properties.filter(property => {
            const { short_description, property_id } = property;
            //query
            if (short_description.toLowerCase().includes(query.toLowerCase())) {
                //favourites mode
                return showFavourites ? savedProperties.includes(property_id) : true;
            } else {
                return false;
            }
        });
    };

    const addSaved = _property_id => {
        if (!!savedProperties.find(property_id => _property_id === property_id)) {
            setSavedProperties(savedProperties.filter(property_id => _property_id !== property_id));
        } else {
            setSavedProperties([...savedProperties, _property_id]);
        }
    };

    useEffect(() => {
        fetchData()
            .then(response => {
                setLoading(false);
                setSavedProperties([]);
            })
            .catch(error => {
                console.error(error);
                setError(true);
            });
    }, []);

    if (error) {
        return <h1 style={{ color: "red", fontWeight: "bold" }}>An error has occurred</h1>;
    } else if (loading) {
        return <FaSpinner className="root__spinner" />;
    } else {
        const outputProperties = filterProperties(properties);
        return (
            <div className="container mx-auto my-5">
                <Header />

                <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {!!outputProperties &&
                        outputProperties.map(property => (
                            <PropertyCard
                                key={property.property_id}
                                property={property}
                                saved={savedProperties.includes(property.property_id)}
                                clickHandler={addSaved}
                            />
                        ))}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store, ownProps) => {
    return { ...store };
};
export default connect(mapStateToProps, {
    setLoading,
    fetchData,
})(App);

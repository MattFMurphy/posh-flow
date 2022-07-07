import { FaBookmark } from "react-icons/fa";

const PropertyCard = ({ property, saved, clickHandler }) => {
    const { photos, price, display_address, property_id } = property;

    const getThumb = thumb => (!!thumb ? `https://mr0.homeflow.co.uk/${thumb}` : `./25694.png`);

    return (
        <div className="border-2 bg-gray-50">
            <div className="relative">
                <img style={{ margin: "auto", maxHeight: "280px" }} src={getThumb(photos[0])} alt={display_address} />

                <button className="absolute top-0 right-2" title="Click to bookmark this property">
                    <FaBookmark className={`text-${saved ? "red" : "yellow"}-400`} size="40" onClick={() => clickHandler(property_id)} />
                </button>

                <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{price}</p>
            </div>

            <div className="px-3 py-2">
                <p>{display_address}</p>
            </div>
        </div>
    );
};

export default PropertyCard;

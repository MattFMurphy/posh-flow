import { connect } from "react-redux";

import Checkbox from "./Checkbox";
import SearchBox from "./SearchBox";

import { setQuery, toggleShowFavourites } from "./actions";

const Header = props => {
    const { setQuery, query, showFavourites, toggleShowFavourites } = props;
    return (
        <header className="flex flex-col md:flex-row justify-between">
            <h1 className="text-8xl">Posh Properties</h1>
            <Checkbox clickHandler={toggleShowFavourites} checked={showFavourites} />
            <SearchBox handler={setQuery} query={query} />
        </header>
    );
};

const mapStateToProps = store => {
    return { ...store };
};

export default connect(mapStateToProps, {
    setQuery,
    toggleShowFavourites,
})(Header);

const Checkbox = ({ clickHandler, checked }) => {
    return (
        <div className="flex flex-row mt-5 relative">
            <label style={{ margin: "auto" }}>Toggle Favourites Only</label>
            <input style={{ marginLeft: "10px" }} type="checkbox" onClick={() => clickHandler(!checked)} checked={checked}></input>
        </div>
    );
};
export default Checkbox;

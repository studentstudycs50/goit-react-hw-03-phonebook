import React from "react";


const Filter = ({ value, onChangeFilter }) => {
  return (
      <>
        <label>
          Find contact by name
          <input
            type="text"
            name="filter"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
    </>
  );
};

export default Filter;


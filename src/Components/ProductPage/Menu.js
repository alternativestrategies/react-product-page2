import React from 'react';
import Select from 'react-select';

const options = [
  { value: "All", label: "All" },
  { value: "tape", label: "Tape" },
  { value: "organization", label: "Organization" },
  { value: "highlighters", label: "Highlighters" }
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '2px solid white',
    fontFamily: 'sans-serif',
    background: 'white',
    '&:hover': {color: 'white', background: 'black'}
  }),
  control: (provided) => ({
    ...provided,
    height: '2.4rem',
    minHeight: 'fit-content',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    background: 'white',
    color: 'black'
  })
};

const Menu = (props) => {
    return(
      <React.Fragment>
        <div className="flex-prod">
          <div className="flex-prod-title">
          <h2>Shop All Products</h2>
          </div>
        
      <div className="flex-menu pb-">
        <div>
        <label htmlFor="category">Category</label>
        </div>
        <div>
        {/* this is for the select */}
        <Select
        className="flex-menu-select"
        isSearchable={false}
        styles={customStyles}
        value={props.selectedOption.value}
        onChange={props.handleChange}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: "5px",
          padding: '0px 20px',
          colors: {}
        })}/>
        </div>
      </div>
        </div>
      </React.Fragment>
    );
}

export default Menu;
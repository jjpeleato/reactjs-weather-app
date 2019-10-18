import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

const Location = (props) => {
    // Object Destructuring on ES6. When the property is equals to the name of the constant
    const {city} = props;

    return (
        <div className="location">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;
import React from 'react';
import PropTypes from "prop-types";
import WeatherLocation from "./../WeatherLocation";

const LocationList = ({ cities, onSelectedLocation }) => {
    const hanldeWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map(city =>
            (
                <WeatherLocation
                    key={city}
                    city={city}
                    onWeatherLocationClick={() => hanldeWeatherLocationClick(city)} />
            )
        )
    );

    return (
        <div className="location-list">
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;
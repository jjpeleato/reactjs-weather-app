import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weather-extrainfo">
        <span className="weather-extrainfo-humidity">{`Humedad: ${humidity} %`}</span>
        <span className="weather-extrainfo-wind">{'Viento: ' + wind + ' m/s'}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;
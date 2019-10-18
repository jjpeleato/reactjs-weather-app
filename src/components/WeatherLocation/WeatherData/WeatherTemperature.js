import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
    THUNDER,
    DRIZZLE,
    RAIN,
    SNOW,
    SUN,
    CLOUD,
} from "./../../../constants/weathers";
import './styles.css';

const icons = {
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'day-showers',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [SUN]: 'day-sunny',
    [CLOUD]: 'cloud',
};

const getWeatherIcon = (weatherState) => {
    const icon = !(weatherState in icons) ? 'day-sunny' : icons[weatherState];
    return <WeatherIcons name={icon} size="2x" />;
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weather-temperature">
        {getWeatherIcon(weatherState)}
        <div className="temperature">{`${temperature} ºC`}</div>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
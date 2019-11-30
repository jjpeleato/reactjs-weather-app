import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./../ForecastItem";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem
            key={forecast.key}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}/>));
};

const renderProgress = () => {
    return 'Cargando pronostico extendido';
};

const ForecastExtended = ({city, forecastData}) => (
    <div className="forecast-extended">
        <h4>Pronostico extendido: {city}</h4>
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;
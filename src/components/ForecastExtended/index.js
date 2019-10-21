import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./../ForecastItem";
import getUrlForecastByCity from "./../../services/getUrlForecastByCity";
import transformForecast from "./../../services/transformForecast";

class ForecastExtended extends Component{
    constructor(props) {
        super(props);

        this.state = {
            forecastData: null
        }
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div className="forecast-extended">
                <h4>Pronostico extendido: {city}</h4>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress() }
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { city } = this.props;
        if (prevProps.city !== city) {
            this.setState({forecastData: null});
            this.updateCity(city);
        }
    }

    componentDidMount() {
        const { city } = this.props;
        this.updateCity(city);
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={forecast.key}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>));
    }

    renderProgress() {
        return 'Cargando pronostico extendido';
    }

    updateCity = city => {
        const api_forecast = getUrlForecastByCity(city);

        fetch(api_forecast).then( resolve => {
            return resolve.json();
        }).then(data => {
            const forecastData = transformForecast(data);
            this.setState({
                forecastData
            });
        });
    };
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
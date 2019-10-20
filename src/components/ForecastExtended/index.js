import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./../ForecastItem";

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'foo',
    wind: 10
};

class ForecastExtended extends Component{
    renderForecastItemDays() {
        return days.map(
            day => (<ForecastItem
                key={day}
                weekDay={day}
                hour={12}
                data={data}/>
            )
        );
    }

    render() {
        const { city } = this.props;

        return (
            <div className="forecast-extended">
                <h4>Pronostico extendido: {city}</h4>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;
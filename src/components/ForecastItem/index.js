import React, {Component} from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData";

class ForecastItem extends Component
{
    render() {
        const { weekDay, hour, data } = this.props;

        return (
            <div className="forecast-item">
                <div className="time">
                    <p>{weekDay} {hour} hs</p>
                </div>
                <WeatherData data={data}/>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default ForecastItem;
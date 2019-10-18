import React, { Component } from 'react';
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";

import './styles.css';

class WeatherLocation extends Component
{
    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    };

    render() {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;

        return (
            <div className="weather-location" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
            </div>
        );
    };

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                city: data.name,
                data: newWeather,
            });
        });
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;
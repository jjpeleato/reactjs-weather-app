import convert from "convert-units";
import {
    THUNDER,
    DRIZZLE,
    RAIN,
    SNOW,
    SUN,
    CLOUD,
} from "./../constants/weathers";

const getTemp = (kelvin) => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
};

const getWeatherState = (weather) => {
    const { id } = weather;

    if (id < 300) {
        return THUNDER;
    } else if ( id < 400) {
        return DRIZZLE;
    } else if ( id < 600) {
        return RAIN;
    } else if ( id < 700) {
        return SNOW;
    } else if ( id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
};

const transformWeather = (weather_data) => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    return {
        wind: speed, // Normal
        temperature, // Object Literal Property Value Shorthand
        weatherState, // Object Literal Property Value Shorthand
        humidity, // Object Literal Property Value Shorthand
    };
};

export default transformWeather;
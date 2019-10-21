import {url_base_forecast, api_key} from './../constants/api'

const getUrlForecastByCity = city => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}`;
};

export default getUrlForecastByCity;
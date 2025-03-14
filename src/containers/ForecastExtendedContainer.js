import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from "./../components/ForecastExtended";
import { getForecastDataFromCities, getCity } from "./../reducers";

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city && <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

const mapStateToProps = state => ({
    city: getCity(state),
    forecastData: getForecastDataFromCities(state)
});

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
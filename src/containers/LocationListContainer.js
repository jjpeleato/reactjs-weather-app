import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LocationList from "./../components/LocationList";
import { setSelectedCity } from "./../actions";

class LocationListContainer extends Component {
    handleOnSelectedLocation = city => {
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleOnSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
    dispatchSetCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
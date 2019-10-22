import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { setCity } from "./actions";
import './App.css';

const cities = [
    'Huesca,es',
    'Zaragoza,es',
    'Teruel,es',
    'Madrid,es',
];

class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            city: null
        }
    }

    handleOnSelectedLocation = city => {
        this.setState({city});
        this.props.dispatchSetCity(city);
    };

    render() {
        const { city } = this.state;

        return (
            <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.handleOnSelectedLocation}/>
                {city === null ? null : <ForecastExtended city={city}/>}
            </div>
        );
    }
}

App.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);
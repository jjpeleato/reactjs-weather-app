import React, {Component} from 'react';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import './App.css';

const cities = [
    'Huesca,es',
    'Zaragoza,es',
    'Teruel,es',
    'Madrid,es',
];

class App extends Component
{
    render() {
        return (
            <div className="App">
                <LocationListContainer cities={cities} />
                <ForecastExtendedContainer />
            </div>
        );
    }
}

export default App;
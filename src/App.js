import React, {Component} from 'react';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import { cities } from './constants/api';
import './App.css';

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
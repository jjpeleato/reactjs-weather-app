import React, {Component} from 'react';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtended from "./components/ForecastExtended";
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

    render() {
        const { city } = this.state;

        return (
            <div className="App">
                <LocationListContainer cities={cities} />
                {city === null ? null : <ForecastExtended city={city}/>}
            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';
import LocationList from "./components/LocationList";
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

    handleOnSelectedLocation = city => {
        this.setState({city});
    };

    render() {
        const { city } = this.state;

        return (
            <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.handleOnSelectedLocation}/>
                {city === null ? '' : <ForecastExtended city={city}/>}
            </div>
        );
    }
}

export default App;

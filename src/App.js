import React from 'react';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import './App.css';

const cities = [
    'Huesca,es',
    'Zaragoza,es',
    'Teruel,es',
    'Madrid,es',
    'Barcelona,es',
];

function App() {
    const handleOnSelectedLocation = city => {
        console.log('handleOnSelectedLocation', city);
    };

    return (
        <div className="App">
            <LocationList cities={cities} onSelectedLocation={handleOnSelectedLocation}/>
            <ForecastExtended />
        </div>
    );
}

export default App;

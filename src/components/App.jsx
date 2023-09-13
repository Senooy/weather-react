import React from 'react';
import { useEffect, useState } from 'react';
import './styles.css';

const currentDate = new Date();
const currentHour = currentDate.getUTCHours();
const currentIndex = hourly.time.findIndex(time => new Date(time).getUTCHours() === currentHour);


const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&hourly=temperature_2m';

fetch(apiURL)
.then(response => {
    if (!response.ok) {
        throw new Error ('La requête a échouée')
    }
    return response.json();
})
.then(data => {

    console.log(data);

})
.catch(error => {
    console.error(error);
});


function App() {
  return (
    <main className="App">
      <div className="weather-header">

      <video autoPlay loop muted>r.
          <source src="/video.mp4" type="video/mp4" />
      </video>

        <span className='city'>Ville</span>
        <span className='temperature'>18°C</span>
        <span className='weather'>Nuageux</span>
      </div>

      <div className="weather-body"> 
        <div className="weather-part">
            <span className='weather-text'>Voici les températures prévues pour chaque heure de la journée</span>
        </div>
        <div className="weather-list">
            <div className="weather-item">
                <span className='weather-item-hour'>06h</span>
                <span className='weather-item-temperature'>14°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>07h</span>
                <span className='weather-item-temperature'>14°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>08h</span>
                <span className='weather-item-temperature'>14°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>09h</span>
                <span className='weather-item-temperature'>16°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>10h</span>
                <span className='weather-item-temperature'>16°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>11h</span>
                <span className='weather-item-temperature'>16°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>12h</span>
                <span className='weather-item-temperature'>18°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>15h</span>
                <span className='weather-item-temperature'>20°C</span>
            </div>
            <div className="weather-item">
                <span className='weather-item-hour'>18h</span>
                <span className='weather-item-temperature'>17°C</span>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;

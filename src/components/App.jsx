import React from 'react';
import './styles.css';

function App() {
  return (
    <main className="App">
      <div className="weather-header">

      <video autoPlay loop muted>
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

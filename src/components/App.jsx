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
            <span className='weather-text'>Voici les températures pour chaque heure de la journée</span>
            <div className="weather-list">
                <div className="weather-item">
                    <span className='weather-item-hour'>12h</span>
                    <span className='weather-item-temperature'>18°C</span>
                </div>
            </div>
        </div>
    </main>
  );
}

export default App;

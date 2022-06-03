import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import {Route, Routes} from 'react-router-dom';


function App() {
  
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    let apiKey = 'ff94340eb7bd7ec3f32ddc75bcc2a34d';

    let flag = 0;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {                           //Si existe la ciudad envida como parametro, entonces agrega a el estado setCities una ciudad mas
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
          };
          cities.forEach(element => {                         //Hago un filtro y consulto si el pais a ingresar esta en el estado actual. Si es asi, no lo agrego nuevamente
            if(element.name === recurso.name){
              flag ++;
              return alert("Ciudad repetida");
            } 
          });
          if(flag === 0) setCities((oldCities) => [...oldCities, ciudad]); //Concateno lo que ya habia en el state con la funcion Set
          flag = 0;
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch} />
     </div>  
      <Routes>
        <Route path='/' exact element={<Cards onClose={onClose} cities={cities}/>}/>
        <Route path='/about'
          element={<About/>}
        />
        <Route path='/ciudad/:id' element={<Ciudad onFilter={onFilter}/>} />         
      </Routes>  
    </div>
  );
}

export default App;

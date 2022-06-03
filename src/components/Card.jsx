import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';

export default function Card ({min, max, name, img, onClose, id, wind, temp, weather, clouds}) { 
  const [flag, setFlag] = useState(false); 
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
        <Link to={`/ciudad/${id}`} >
          <h5 className="card-title">{name}</h5>
        </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
          <button onClick={()=>setFlag(!flag)} id="button">More</button>
          {flag ? 
            <div>
              <hr />
              <p>Weather: {weather}</p>
              <p>Wind: {wind} km/hs</p>  
              <p>Temperature: {temp}°</p>
              <p>Cloudiness: {clouds}%</p>
            </div> : ""}
        </div>
      </div>
      
    );
};



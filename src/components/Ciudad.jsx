import { useParams } from "react-router-dom";
import './Ciudad.css';
import React from'react';

const apiKeyGoogle = "AIzaSyBwA8q2gnQBKT59KTge5mPtBr_MhZAg6JQ";
var urlGoogle = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${apiKeyGoogle}`;

export default function Ciudad({ onFilter }) {

    const { id } = useParams();
    let city = onFilter(id);
    return (
        <div className="ciudad">
            <div className="container">
                <h2>The detail info of {city.name} from {city.country} is</h2>
                <div className="info">
                    <div>Temperature: {city.temp} ºC</div>
                    <div>Weather: {city.weather}</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div>Cloudines: {city.clouds}%</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>

        </div>
    )
}
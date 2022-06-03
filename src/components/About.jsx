import React from "react";
import './About.css';
import img from '../img/searchimg.PNG'
import img2 from '../img/searchimg2.PNG'
import img3 from '../img/newCard.PNG'

export default function About() {

    return (
      <div id="containerPrincipal">
          <h2 id="tittle" >Hi, my name Juan Manuel</h2>
          <p>This is a little about me and this weather app.</p>
          <p>Im from San Luis, Argentina. This job was a task from
              Henry. The performance is made with React, HTML 5, and CSS for the styles.</p>
          <p>For this aplication whe used the web API Open Weather map (for more info: http://api.openweathermap.org).</p>
          <p>The app functions are basic. We must input the city name (a specify city or a country name), like the next image:</p>
          <img id="imgSearch" src={img2} alt="" />
          <p> And the card whith all the weather information will be deployed in the front page. </p>
          <img src={img3} alt="" />

      </div>
    );
  }
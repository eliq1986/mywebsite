import React from 'react';
import 'normalize.css';
import {Grid, Row, Col, Image,Thumbnail} from 'react-bootstrap';
import Me from './images/me.jpg';
import Donald from './images/Donald.jpg';
import './About.css';

const About = () => {
  return (

      <div className="aboutContainer" >
        <Grid >
          <h3 class="aboutH3">About me</h3>
          <Image  responsive circle src={Me} className="profilePic" />

          <p className="aboutP">I'm a Front-End Developer based in sunny Los Angeles, California.</p>
          <p className="aboutP">I enjoy building and figuring out complex problems into full functional sites. When I am not coding, you can find me at the gym or at Disneyland.</p>
          <div>
            <h3 className="aboutRandom">Random facts</h3>
            <Image  responsive className="about" src={Donald} rounded />
            <ul>
              <li className="aboutFacts">I go to Disneyland every week.</li>
              <li className="aboutFacts">I wake up at 5am everyday.</li>
              <li className="aboutFacts">I know how to fix the Last Jedi movie.</li>
              <li className="aboutFacts">I love airports.</li>
            </ul>
          </div>
        </Grid>
      </div>
  )
}

export default About;

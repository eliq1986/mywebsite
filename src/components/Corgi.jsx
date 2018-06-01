import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Dog from './images/Svg.png';

const Corgi = () => {
  return (


      <div className="flickr">
        <h2>Corgi Mock Website</h2>

        <h3>Overview</h3>

        <p>
          Modernized the user interface by utitlizing SVG graphics. Was given HTML, CSS and SVGs to start. Learned how to scale SVGs to match example.
        </p>

        <h3>Details</h3>
        <Image className="flickrEx" responsive src={Dog}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/TREEHOUSE-8" target="_blank">Code</Button>

          <Button href="https://eliq1986.github.io/TREEHOUSE-8/">Demo</Button>
        </div>

        <div className="flickrFlex">

          <span>Duration</span>
          <span>March 23rd 2018 - March 27th 2018</span>
        </div>

        <div className="flickrFlex">
          <span>Scope</span>
          <span>CSS Animations, SVGs</span>
        </div>


        </div>



  )
}

export default Corgi;

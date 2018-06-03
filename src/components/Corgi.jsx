import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Dog from './images/Svg.png';

const Corgi = () => {
  return (


      <div className="flickr">
        <h2>Corgi Mock Website</h2>

        <h2>Overview</h2>

        <p>
          Modernized the user interface by utitlizing SVG graphics. Was given HTML, CSS and SVGs to start. Learned how to scale SVGs to match example.
        </p>

        <h2>Details</h2>
        <Image className="flickrEx" responsive src={Dog}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/TREEHOUSE-8" target="_blank" bsStyle="primary">Code</Button>

          <Button href="https://eliq1986.github.io/TREEHOUSE-8/" bsStyle="success">Demo</Button>
        </div>
        
        <h2>Duration</h2>
        <div className="flickrFlex">
          <p>March 23rd 2018 - March 27th 2018</p>
        </div>
        <h3>Skills:</h3>
        <div className="flickrFlex">

          <ul className="buttonFlex">


            <Button bsSize="small" bsStyle="warning">HTML5</Button>
            <Button bsSize="small" bsStyle="warning">SVG</Button>
            <Button bsSize="small" bsStyle="warning" >CSS</Button>
            <Button bsSize="small" bsStyle="warning" >CSS Animations</Button>

          </ul>
        </div>

        </div>



  )
}

export default Corgi;

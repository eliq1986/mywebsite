import React from 'react';
import {Image, Button, Grid, Row, Col, ButtonGroup} from 'react-bootstrap';
import './Flickr.css';
import FlickrAPI from './images/Flickr.png';

const Flickr = () => {
  return (


      <div className="flickr">
        <h2>Flickr API App</h2>

        <h3>Overview</h3>

        <p>
          Image gallery using React and Flickr API. Utilizng Create-react-app, built gallery components and set up routing.
        </p>

        <h3>Details</h3>
        <Image className="flickrEx" responsive src={FlickrAPI}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/React-flickr-API" target="_blank" bsStyle="primary">Code</Button>

          <Button href="https://eliq1986.github.io/React-flickr-API/"  target="_blank" bsStyle="success">Demo</Button>
        </div>
        <h3>Duration</h3>
        <div className="flickrFlex">


          <p>May 1st 2018 - May 24th 2018</p>
        </div>
        <h3>Skills:</h3>
        <div className="flickrFlex">

          <ul className="buttonFlex">


            <Button bsSize="small" bsStyle="warning">HTML5</Button>
            <Button bsSize="small" bsStyle="warning">API</Button>
            <Button bsSize="small" bsStyle="warning" >React</Button>

          </ul>
        </div>


      </div>



  )
}

export default Flickr;

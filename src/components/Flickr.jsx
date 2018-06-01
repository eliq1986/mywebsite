import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
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

          <Button href="https://github.com/eliq1986/React-flickr-API" target="_blank">Code</Button>

          <Button href="https://eliq1986.github.io/React-flickr-API/">Demo</Button>
        </div>

        <div className="flickrFlex">

          <span>Duration</span>
          <span>May 1st 2018 - May 24th 2018</span>
        </div>

        <div className="flickrFlex">
          <span>Scope</span>
          <span>React, React-Router, API</span>
        </div>


        </div>



  )
}

export default Flickr;
import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Form from './images/Form.png';

const Responsive = () => {
  return (


      <div className="flickr">
        <h2>Online Registration Form</h2>

        <h3>Overview</h3>

        <p>
          A responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes. Using a mobile first approach and adding media queries to appropriate break points.
        </p>
        <h3>Details</h3>
        <Image className="flickrEx" responsive src={Form}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/Treehouse-Project-3" target="_blank">Code</Button>

          <Button href="https://eliq1986.github.io/Form/">Demo</Button>
        </div>

        <div className="flickrFlex">

          <span>Duration</span>
          <span>February 8th 2018 - February 12th</span>
        </div>

        <div className="flickrFlex">
          <span>Scope</span>
          <span>HTML5, CSS3</span>
          </div>


        </div>



  )
}

export default Responsive;

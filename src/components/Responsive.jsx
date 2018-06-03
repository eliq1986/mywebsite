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

          <Button href="https://github.com/eliq1986/Treehouse-Project-3" target="_blank" bsStyle="primary">Code</Button>

          <Button href="https://eliq1986.github.io/Form/" bsStyle="success">Demo</Button>
        </div>


        <h3>Duration</h3>
        <div className="flickrFlex">


          <p>February 8th 2018 - February 12th</p>
        </div>
        <h3>Skills:</h3>
        <div className="flickrFlex">

          <ul className="buttonFlex">


            <Button bsSize="small" bsStyle="warning">HTML5</Button>
            <Button bsSize="small" bsStyle="warning">CSS3</Button>
            


          </ul>
        </div>


        </div>



  )
}

export default Responsive;

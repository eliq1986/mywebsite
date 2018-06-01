import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Director from './images/Api.png';

const Directory = () => {
  return (


      <div className="flickr">
        <h2>Employee Directory</h2>

        <h3>Overview</h3>

        <p>
          Built an employee directory using JSON data from an API. Clicking on an employee will show a modal with additional information. Built with a mobile first perspective.
        </p>
        <h3>Details</h3>
        <Image className="flickrEx" responsive src={Director}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/TREEHOUSE-10" target="_blank">Code</Button>

          <Button href="https://eliq1986.github.io/Directory/">Demo</Button>
        </div>

        <div className="flickrFlex">

          <span>Duration</span>
          <span>April 15th 2018 - April 30th 2018</span>
        </div>

        <div className="flickrFlex">
          <span>Scope</span>
          <span>AJAX, Javascript, HTML5, CSS3</span>
        </div>


        </div>



  )
}

export default Directory;

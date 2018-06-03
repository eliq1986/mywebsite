import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Dashboard from './images/Graphs.png';

const Dash = () => {
  return (


      <div className="flickr">
        <h2>DashBoard</h2>

        <h3>Overview</h3>

        <p>
          Interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involved creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.
        </p>

        <h3>Details</h3>
        <Image className="flickrEx" responsive src={Dashboard}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/TREEHOUSE-9" target="_blank" bsStyle="primary">Code</Button>

          <Button href="https://eliq1986.github.io/TREEHOUSE-9/"  target="_blank" bsStyle="success">Demo</Button>
        </div>

        <div>
          <h3>Duration</h3>



          <p>March 30th  - April 7th 2018</p>
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

export default Dash;

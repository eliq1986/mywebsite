import React from 'react';
import {Image, Button, Grid, Row, Col} from 'react-bootstrap';
import './Flickr.css';
import Game from './images/Game.png';

const Gameapp = () => {
  return (


      <div className="flickr">
        <h2>Game Show App</h2>

        <h3>Overview</h3>

        <p>
          A word guessing game. Using Javascript to come up with a random phrase that players will try to guess by entering different letters into the program.
        </p>

        <h3>Details</h3>
        <Image className="flickrEx" responsive src={Game}/>


        <div className="flickrFlex">

          <Button href="https://github.com/eliq1986/TREEHOUSE-7" target="_blank" bsStyle="primary">Code</Button>

          <Button href="https://eliq1986.github.io/TREEHOUSE-7/"  target="_blank" bsStyle="success">Demo</Button>
        </div>



        <h3>Duration</h3>
        <div className="flickrFlex">


          <p>March 16th 2018 - March 20th 2018</p>
        </div>
        <h3>Skills:</h3>
        <div className="flickrFlex">

          <ul className="buttonFlex">


            <Button bsSize="small" bsStyle="warning">Javascript</Button>
            <Button bsSize="small" bsStyle="warning">DOM Scripting</Button>


          </ul>
        </div>




        </div>



  )
}

export default Gameapp;

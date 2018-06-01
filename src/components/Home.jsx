import React, {Component} from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Me from './images/me.jpg';



const Home = () => {
  return (

      <div>

        <Jumbotron>
          <Grid>

            <h1>DEVELOPER</h1>

            <Link to="/About">
              <Button bsStyle="primary" bsSize="large">Learn More</Button>
            </Link>

          </Grid>
        </Jumbotron>
      </div>

      )
}


export default Home;

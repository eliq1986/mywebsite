import React from 'react';
import Game from './images/Game.png';
import Flickr from './images/Flickr.png';
import Form from './images/Form.png';
import Api from './images/Api.png'
import './Portfolio.css';
import Graph from './images/Graphs.png';
import Corgi from './images/Svg.png';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image,Thumbnail, Modal} from 'react-bootstrap';

const Portfolio = () => {
  return (

      <div className="overlay">
        <Grid>
          <div className="show-grid">
            <h3 className="portH3">My Recent Work</h3>
            <p className="description">Recent projects within the last 6 months</p>
            <ul >

              <Col md={12} className="containerPort">
                <Link  to="/Flickr">
                  <li> <Image   responsive className="portPic" src={Flickr} alt="react flickr photo app"/><h2>Flickr App</h2>
                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/Directory">
                  <li><Image responsive  className="portPic"  src={Api} alt="employee directory" /><h2>Startup Directory</h2>
                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/Corgi">
                  <li>
                    <Image responsive className="portPic"  src={Corgi} alt="corgi website" /><h2>Corgi Website</h2>

                  </li>
                </Link>
              </Col>

            </ul>

          </div>
          <div className="show-grid" >
            <ul>
              <Col md={12}>
                <Link to="/Responsive">
                  <li>
                    <Image responsive className="portPic" src={Form} alt="empty form"/><h2>Responsive Form</h2>

                  </li>
                </Link>
              </Col>
              <Col md={12}>
                <Link to="/Game">
                  <li>
                    <Image responsive  className="portPic" src={Game} alt="guessing game"/><h2>Game</h2>

                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/DashBoard">
                  <li>
                    <Image responsive  className="portPic"  src={Graph} alt="dashboard app with multipe graphs" /><h2>Web Dashboard</h2>

                  </li>
                </Link>
              </Col>
            </ul>
          </div>
        </Grid>
      </div>

         )
}

export default Portfolio;

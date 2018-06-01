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
                  <li> <Image   responsive className="portPic" src={Flickr} /><h2>Flickr App</h2><span></span><p>React</p>
                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/Directory">
                  <li><Image responsive  className="portPic"  src={Api} /><h2>Startup Directory</h2><span></span><p>API</p>
                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/Corgi">
                  <li>
                    <Image responsive className="portPic"  src={Corgi} /><h2>Corgi Website</h2><span></span><p>SVG Graphics</p>


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
                    <Image responsive className="portPic" src={Form} /><h2>Responsive Form</h2><span></span><p>Responsiveness</p>

                  </li>
                </Link>
              </Col>
              <Col md={12}>
                <Link to="/Game">
                  <li>
                    <Image responsive  className="portPic" src={Game} /><h2>Game</h2><span></span><p>Javascript</p>

                  </li>
                </Link>
              </Col>

              <Col md={12}>
                <Link to="/DashBoard">
                  <li>
                    <Image responsive  className="portPic"  src={Graph} /><h2>Web Dashboard</h2><span></span><p>CSS3 HTML5</p>

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

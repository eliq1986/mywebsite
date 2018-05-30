import React from 'react';
import Game from './images/Game.png';
import Flickr from './images/Flickr.png';
import Form from './images/Form.png';
import Api from './images/Api.png'
import './Portfolio.css';
import Graph from './images/Graphs.png';
import Corgi from './images/Svg.png';
import {Grid, Row, Col, Image,Thumbnail} from 'react-bootstrap';

const Portfolio = () => {
  return (

      <div>
        <Grid>
          <div className="show-grid">
            <h3 className="portH3">My Recent Work</h3>
            <p className="description">Recent projects within the last 6 months</p>
            <ul >
              <Row>
                <Col md={4}>
                  <li> <a href="https://github.com/eliq1986/React-flickr-API" target="_blank"><Image  height="200" responsive className="portPic" src={Flickr} /></a>

                    <p className="description">Flickr Image Gallery built with <strong>React</strong></p>

                  </li>
                </Col>
                <Col md={4}>
                  <li><a href="https://github.com/eliq1986/TREEHOUSE-10"  target="_blank"><Image responsive height="200" className="portPic"  src={Api} /></a>

                    <p className="description"> Api Directory built with <strong>Vanilla Javascript</strong>, <strong>CSS3</strong> and <strong>HTML5</strong></p>

                  </li>
                </Col>
                <Col md={4}>
                  <li>
                    <a href="https://github.com/eliq1986/TREEHOUSE-8" target="_blank"><Image responsive className="portPic"  src={Corgi} /></a>
                    <p className="description">Mock Website built with <strong>SVG</strong> graphics, <strong>HTML5</strong> and <strong>CSS3</strong></p>

                  </li>
                </Col>
              </Row>
            </ul>

          </div>
          <div className="show-grid" >
            <ul>
              <Col md={4}>
                <li>
                  <a href="https://github.com/eliq1986/Treehouse-Project-3" target="_blank"><Image responsive className="portPic" src={Form} /></a>
                  <p className="description">Online Registration Form built with <strong>HTML5</strong> and <strong>CSS3</strong></p>
                </li>
              </Col>
              <Col md={4}>
                <li>
                  <a href="https://github.com/eliq1986/TREEHOUSE-7" target="_blank"><Image responsive  className="portPic" src={Game} /></a>
                  <p className="description">Game Show App built with <strong>Vanilla Javascript</strong></p>
                </li>
              </Col>
              <Col md={4}>
                <li>
                  <a href="https://github.com/eliq1986/TREEHOUSE-9" target="_blank"><Image responsive  className="portPic"  src={Graph} /></a>
                  <p className="description">Interactive dashboard built with <strong>SVG</strong> graphics, <strong>Javascript</strong>, <strong>CSS3</strong> and <strong>HTML5</strong></p>
                </li>
              </Col>
            </ul>
          </div>
        </Grid>
      </div>

         )
}

export default Portfolio;

import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import './Nav.css';
import {Jumbotron, Grid, Row, Col, Image, Button, Navs} from 'react-bootstrap';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle={
  transition: `opactiy ${duration}ms ease-in-out`,
  opactiy: 0
}




class Nav extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

onShow = () => {
  this.setState({visible: true})

   if(this.state.visible === true) {
     this.setState({visible: false})
   }
}


  render() {
  return (

    <nav>

      <div className="flex">
        <span>EQ</span>
        <a onClick={this.onShow} className="burger">&#9776;</a>
      </div>
      {this.state.visible ?

        <ul className="slideDown" style={defaultStyle}>

          <NavLink className="link" to="https://eliq1986.github.io/website">Home</NavLink>
          <NavLink className="link" to="/About">About</NavLink>
          <NavLink className="link" to="/Contact">Contact</NavLink>
          <NavLink className="link" to="/Portfolio">Portfolio</NavLink>
        </ul>
      : null
      }

      <ul className="wide">

        <NavLink className="links" to="https://eliq1986.github.io/website">Home</NavLink>
        <NavLink className="links" to="/About">About</NavLink>
        <NavLink className="links" to="/Contact">Contact</NavLink>
        <NavLink className="links" to="/Portfolio">Portfolio</NavLink>
      </ul>

    </nav>



      )
    }

}
export default Nav;

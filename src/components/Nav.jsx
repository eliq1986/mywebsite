import React, {Component} from 'react';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import './Nav.css';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class Nav extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

onShow = () => {
  this.setState({show: true})
   if(this.state.show === true) {
     this.setState({show: false})
   }
}


  render() {
  return (

      <nav>
        <div className="flex">
          <span>EQ</span>
          <a onClick={this.onShow} className="burger">&#9776;</a>
        </div>
        {this.state.show ?
          <ul className="narrow">

            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/About">About</NavLink>
            <NavLink className="link" to="/Contact">Contact</NavLink>
            <NavLink className="link" to="/Portfolio">Portfolio</NavLink>
          </ul>
        : null
        }
        <ul className="wide">

          <NavLink className="links" to="/">Home</NavLink>
          <NavLink className="links" to="/About">About</NavLink>
          <NavLink className="links" to="/Contact">Contact</NavLink>
          <NavLink className="links" to="/Portfolio">Portfolio</NavLink>
        </ul>
      </nav>
    
      )
    }

}
export default Nav;

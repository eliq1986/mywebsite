import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

onShow = () => {
  if (!this.state.show) {
     this.setState({show: true})
     console.log(this.state.show);
  }

}

  render() {
  return (
    <nav>
      <span>&#60;E/Q&#62;</span>
      <a onClick={this.onShow}>&#9776;</a>
      <ul className="narrow">

        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/About">About</NavLink>
        <NavLink className="link" to="/Contact">Contact</NavLink>
        <NavLink className="link" to="/Portfolio">Portfolio</NavLink>
      </ul>

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

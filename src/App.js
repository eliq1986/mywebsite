import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import {BrowserRouter, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container-fluid text-center">
          <Nav />

          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
        );
        }
        }

        export default App;

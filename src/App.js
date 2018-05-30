import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <main className="App container-fluid text-center">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Portfolio" component={Portfolio} />
          </main>
          <Footer />
        </div>
        </BrowserRouter>
        );
        }
        }

        export default App;

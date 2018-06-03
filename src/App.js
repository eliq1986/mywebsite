import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Responsive from './components/Responsive';
import Gameapp from './components/Game';
import Dash from './components/Dashboard';
import Corgi from './components/Corgi';
import Portfolio from './components/Portfolio';
import Flickr from './components/Flickr';
import Directory from './components/Directory';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect

} from 'react-router-dom';




import {Container} from 'react-bootstrap';
import './App.css';

import ScrollToTop from './components/scroll';







class App extends Component {
  render() {
    return (



        <div>
          <header>
            <Nav />
          </header>
          <main className="App container-fluid text-center">



            <Switch location={this.props.location}>

              <ScrollToTop>
                <Route exact path="/" component={Home} />
                <div className="componentContainer">
                  <Route  path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Portfolio" component={Portfolio} />
                  <Route path="/Flickr" component={Flickr} />
                  <Route path="/Directory" component={Directory} />
                  <Route path="/Responsive" component={Responsive} />
                  <Route path="/Game" component={Gameapp} />
                  <Route path="/Dashboard" component={Dash} />
                  <Route path="/Corgi" component={Corgi} />
                </div>
                </ScrollToTop>

              </Switch>




            </main>



            <Footer />
          </div>



        );
        }
        }

        export default App;

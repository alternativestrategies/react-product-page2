import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home/';
import ProductPage from './Components/ProductPage'

import Contacts from './Components/Contacts'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';


class App extends Component {

  render(){
    return (
      //navigation within single page app
      <React.Fragment>
        <BrowserRouter>
        <Navigation />
          <Route exact path="/" component={Home}/>
          <Route path="/product" component={ProductPage}/>
          <Route path="/contact" component={Contacts}/>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

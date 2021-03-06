import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ErrorComp from './pages/errorcomp/ErrorComp'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './pages/products/Products'
import AboutUs from './pages/aboutUs/AboutUs.'
import ContactUs from './pages/contactUs/ContactUs'

class App extends Component {
  render(){
    return (
      <div className= 'container'>
            <BrowserRouter>
              <Header />
                <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route exact path='/Products' component={Products}/>
                  <Route exact path='/About-Us' component={AboutUs}/>
                  <Route exact path='/Contact-Us' component={ContactUs}/>
                  <Route exact path='*' component={ErrorComp}/>
                </Switch>
                <Footer />
            </BrowserRouter>
            
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'

 import { Route} from 'react-router-dom'
  
  // <Route path="/about" component={About} />
  // <Route path="/services" component={Services} />
  // <Route path="/contact" component={Contact} />
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Footer/>
      </div>
    )
  }
}
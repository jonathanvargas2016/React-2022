import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom'

class App extends Component{
  render(){
    return (
        <Router>
          <div className="App">
            <Link to="/customers">Customers</Link><br/>
            <Link to="/customers/300000">customer 300000</Link>
          </div>
        </Router>

    )
  }
}

export default App;

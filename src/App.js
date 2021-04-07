import React from 'react'
import './App.css';
import Table from './Table'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Safe from './Safe.js'
import Sense from './Sense.js'
import Glass from './Glass'
import Users from './Users'
import Nav from './Nav';
import Footer from './Footer'

function App() {
  
  document.title='Manage'
  
  return (
    <div className="App">
   
      <Router>
      
      <Nav/>
       <Route exact component={Table} path='/'/>
        <Route exact component={Table} path='/Overview'/>
        <Route component={Sense} exact path='/Sense' />
        <Route component={Safe} exact path="/Safe"/>
        <Route component={Glass} exact path="/Glass"/>
        <Route component={Users} exact path='/Users' />
        <Footer/>
    
      </Router>
  
    </div>
  );
}

export default App;

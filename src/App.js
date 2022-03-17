import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cartprovider from './components/provider/Cartprovider'
import Cartpage from './pages/Cartpage'

import Homepage from './pages/Homepage'

const App = () => {
  return (
    
      <Router>
      <Cartprovider>
        
     <Navbar>
     <Switch>
     <Route path="/cart" component={Cartpage}/>
       <Route path="/" component={Homepage } exact/>
      
       </Switch>
     </Navbar>
     
     </Cartprovider>
     </Router>
   
  )
}

export default App
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cartprovider from './components/provider/Cartprovider'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <BrowserRouter>
      <Cartprovider>
     <Navbar>
        <Route path="/" component={Homepage}/>
     </Navbar>
     </Cartprovider>
     </BrowserRouter>
  )
}

export default App
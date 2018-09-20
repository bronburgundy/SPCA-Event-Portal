import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Header} from './Header'
// import {Main} from './Main'
import {Banner} from './Banner'
import Events from './Events' // If exporting at the top of comp, name needs to be in {}
import Event from './Event'
import Volunteers from './Volunteers'
// import Login from './Login'
import {Footer} from './Footer'
// import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        {/* <Route exact path='/' component={Main} /> */}
        <Route exact path='/' component={Banner} />
        <Route exact path='/' component={Events} />
        <Route exact path='/events/:id' component={Event} />
        <Route exact path='/:id' component={Volunteers} />
        {/* <Route path='/' component={Login} />
        <WaitIndicator /> */}
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App

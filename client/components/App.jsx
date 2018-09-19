import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Header} from './Header'
// import {Main} from './Main'
import {Banner} from './Banner'
import Events from './Events' // If exporting at the top of component, name needs to be in {}
import Event from './Event'
import Volunteers from './Volunteers'
import Volunteer from './Volunteer'
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
        <Route exact path='/events/:id' component={Volunteers} />
        <Route exact path='/events/:id' component={Volunteer} />
        {/* <Route path='/' component={Login} />
        <WaitIndicator /> */}
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App

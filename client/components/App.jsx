import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Header} from './Header'
import {Banner} from './Banner'
import Events from './Events' // If exporting at the top of comp, name needs to be in {}
import Event from './Event'
import Volunteers from './Volunteers'
import {Footer} from './Footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Banner} />
        <Route exact path='/' component={Events} />
        <Route exact path='/events/:id' component={Event} />
        <Route exact path='/:id' component={Volunteers} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App

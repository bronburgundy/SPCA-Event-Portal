import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Events from './Events'
import Event from './Event'

export const Main = () => {
  return (
    <Router>
      <div className='main'>
        <Route exact path='/' component={Events} />
        <Route exact path='/:id' component={Event} />
      </div>
    </Router>
  )
}

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Events from './Events'
import Event from './Event'
import Volunteers from './Volunteers'

export const Main = () => {
  return (
    <Router>
      <div className='main'>
        <Route path='/' component={Events} />
        <Route path='/events/:id' component={Event} />
        <Route path='/events/:id/Volunteers' component={Volunteers} />
      </div>
    </Router>
  )
}

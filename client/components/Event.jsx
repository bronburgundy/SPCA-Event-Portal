import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {EventInfo} from './EventInfo'
import {EventInfoEdit} from './EventInfoEdit'
import {Volunteers} from './Volunteers'

const Event = () => {
  return (
    <Router>
      <div className='event'>
        <Switch>
          <Route path='/:id' component={EventInfo} />
          <Route path='/:id/edit' component={EventInfoEdit} />
        </Switch>
        <Route exact path='/:id' component={Volunteers} />
      </div>
    </Router>
  )
}

export default Event

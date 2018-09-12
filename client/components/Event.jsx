import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {EventInfo} from './EventInfo'
import {EventInfoEdit} from './EventInfoEdit'
import {Volunteers} from './Volunteers'
import {Volunteer} from './Volunteer'


const Event = () => {
  return (
    <Router>
      <div className='event'>
        <Switch>
          <Route path='/events/:id' component={EventInfo} />
          <Route path='/:id/edit' component={EventInfoEdit} />
        </Switch>
        <Route exact path='events/:id' component={Volunteers} />
        <Route exact path='events/:id' component={Volunteer} />
      </div>
    </Router>
  )
}

export default Event

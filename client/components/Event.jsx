import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import EventInfo from './EventInfo'
// import {EventInfoEdit} from './EventInfoEdit'
import Volunteers from './Volunteers'
import Volunteer from './Volunteer'

const Event = () => {
  return (
    <Router>
      <div className='eventInfo'>
        {/* <Switch> */}
        <Route exact path='/events/:id' component={EventInfo} />
        {/* <Route path='/events/:id/edit' component={EventInfoEdit} />
        </Switch> */}
        <Volunteers />
        <Volunteer />
      </div>
    </Router>
  )
}

export default Event

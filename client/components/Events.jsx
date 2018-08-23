import React from 'react'
import {getEvents} from '../apiClient'

class Events extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    getEvents()
      .then(events => {
        this.setState({events})
      })
  }

  render () {
    return (
      <div className='events'>
        <h3>Events</h3>
        <ul>
          {this.state.events.map(event => {
            return <li key={event.id}>{event.name} {event.start_date} {event.end_date} {event.location}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Events

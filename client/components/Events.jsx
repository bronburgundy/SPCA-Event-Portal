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
            return <li key={event.id} className='event-info'>{event.image} {event.location} <h3>{event.name}</h3> {event.start_date} {event.end_date} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Events

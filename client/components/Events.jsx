import React from 'react'
import Link from 'react-router-dom'
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
        <h2>Events</h2>
        <ul>
          {this.state.events.map(event => {
            return (
              <li key={event.id} className='event'>
                <Link to={`/events/${event.id}`}>
                  <img className='event-image' src={event.image} alt=""/><br />
                  <span className='event-location'>{event.location}</span>
                  <h4>{event.name}</h4>
                  <span className='event-date'>{event.start_date} {event.end_date}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Events

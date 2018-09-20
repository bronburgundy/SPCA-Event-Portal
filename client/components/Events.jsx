import React from 'react'
import {getEvents} from '../apiClient'
import {Link} from 'react-router-dom'

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
              <Link key={event.id} to={`/events/${event.id}`}>
                <li className='event'>
                  <img className='event-image' src={event.image} alt=""/><br />
                  <span className='event-location'>{event.location}</span>
                  <h4>{event.name}</h4>
                  <span className='event-date'>{event.start_date} {event.end_date}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Events

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
            return (
              <li key={event.id} className='event'>
                <img className='event-image' src={event.image} alt=""/><br />
                <span className='event-location'>{event.location}</span>
                <h4>{event.name}</h4>
                <span className='event-date'>{event.start_date}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Events

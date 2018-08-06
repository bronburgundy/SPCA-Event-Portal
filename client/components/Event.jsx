import React from 'react'
import {getEvent} from '../apiClient'

class Event extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {}
    }
  }

  componentDidMount () {
    getEvent()
      .then(events => {
        this.setState({event})
      })
  }

  render () {
    return (
      <div className='event'>
        <h3>{event.name}</h3>
        <ul>
          {this.state.events.map(event => {
            return <li key={event.id}>{event.name} {event.start_date} {event.end_date} {event.location}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Event

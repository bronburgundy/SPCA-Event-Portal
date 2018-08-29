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
      .then(event => {
        this.setState({event})
      })
  }

  render () {
    return (
      <div className='event'>
        <h2>{event.name}</h2>
        <div className='event-info'>
          {this.state.events.map(event => {
            return <li key={event.id}>{event.name} {event.start_date} {event.end_date} {event.location}</li>
          })}
        </div>
      </div>
    )
  }
}

export default Event

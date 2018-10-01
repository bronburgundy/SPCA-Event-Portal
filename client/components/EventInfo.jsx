import React from 'react'
import {getEvent} from '../apiClient'

class EventInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {}
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    getEvent(id)
      .then(event => {
        this.setState(event)
      })
  }

  render () {
    return (
      <div className='event-info'>
        <h2>{this.state.event.name}</h2>
        <p>Dates: {this.state.event.start_date} {this.state.event.end_date}</p>
        <p>Location: {this.state.event.location}</p>
      </div>
    )
  }
}

export default EventInfo

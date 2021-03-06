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
    getEvent()
      .then(event => {
        this.setState({event})
      })
  }

  render () {
    const id = Number(this.props.match.params.id)
    return (
      <div className='event'>
        <h2>{this.props.event.name}</h2>
        <p>Dates: {this.props.event.start_date} {this.props.event.end_date}</p>
        <p>Location: {this.props.event.location}</p>
      </div>
    )
  }
}

export default EventInfo

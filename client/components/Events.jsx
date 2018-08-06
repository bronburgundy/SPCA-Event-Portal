import React from 'react'
import {getEvents} from '../apiClient'

class Volunteers extends React.Component {
  constructor (props) {
    super(props)
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
      <div className='main'>
        <div className='main-content'>
          <h3>Events</h3>
          <ul>
            {this.state.volunteers.map(volunteer => {
              return <li key={volunteer.id}>{volunteer.first_name} {volunteer.last_name} {volunteer.phone} {volunteer.email} {volunteer.dob} {volunteer.gender}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Volunteers

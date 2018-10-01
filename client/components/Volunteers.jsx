import React from 'react'
import {getVolunteers} from '../apiClient'

class Volunteers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      volunteers: []
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    getVolunteers(id)
      .then(volunteers => {
        this.setState({volunteers})
      })
  }

  render () {
    return (
      <div className='volunteers'>
        <h3>Volunteers</h3>
        <ul>
          {this.state.volunteers.map(volunteer => {
            return (
              <li key={volunteer.id}>{volunteer.first_name} {volunteer.last_name} {volunteer.phone} {volunteer.email}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Volunteers

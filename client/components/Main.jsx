import React from 'react'
import {getAll} from '../apiClient'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      volunteers: []
    }
  }

  componentDidMount () {
    getAll()
      .then(volunteers => {
        this.setState({volunteers})
      })
  }

  render () {
    return (
      <div className='main'>
        <div className='main-content'>
          <h3>Volunteers</h3>
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

export default Main

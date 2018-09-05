import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'
import {updateEvent} from '../apiClient'

class EventInfoEdit extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      start_date: '',
      end_date: '',
      location: '',
      image: ''
    }
  }

  componentDidMount () {
    updateEvent()
      .then(events => {
        this.setState({events})
      })
  }

  render () {
    return (
      <div className='events'>
        <h2>Events</h2>
      </div>
    )
  }
}

export default EventInfoEdit

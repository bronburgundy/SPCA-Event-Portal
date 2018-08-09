/* eslint-disable no-console */

import request from 'superagent'

const getEvents = () => {
  return request
    .get('/api/v1/events')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

const getEvent = () => {
  return request
    .get('/api/v1/events/:id')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

const addEvent = (event) => {
  return request
    .post('/api/v1/events')
    .send(event)
    .catch(err => {
      console.error(err)
    })
}

const updateEvent = (event) => {
  return request
    .put('/api/v1/events')
    .send(event)
    .catch(err => {
      console.error(err)
    })
}

const deleteEvent = (eventId) => {
  return request
    .del('/api/v1/events')
    .send({id: eventId})
    .catch(err => {
      console.error(err)
    })
}

const getVolunteers = () => {
  return request
    .get('/api/v1/events/:id/volunteers')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  getVolunteers
}

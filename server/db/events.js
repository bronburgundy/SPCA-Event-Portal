const connection = require('./connection')
const knex = require('knex')

const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getEvents,
  getEvent,
  editEvent,
  addEvent,
  deleteEvent,
  EventExists,
  createEvent,
  getVolunteersByEvent
}

function getEvents () {
  return db('Events').select()
}

function getEvent (id) {
  return db('Events')
    .where('id', id).first()
}

function editEvent (updatedEvent) {
  return db('Events')
    .where('id', updatedEvent.id)
    .update(updatedEvent)
}

function addEvent (newEv) {
  return db('Events').insert(newEv)
}

function deleteEvent (id) {
  return db('Events')
    .where('id', id).del()
}

function EventExists (email, conn) {
  const db = conn || connection
  return db('Events')
    .count('id')
    .where('email', email)
    .then(count => {
      return count[0].id > 0
    })
}

function createEvent (name, startDate, endDate, location, conn) {
  const db = conn || connection
  return db('Events')
    .insert({
      name,
      startDate,
      endDate,
      location
    })
}
function getVolunteersByEvent (id) {
  return db('event_times')
    .where('event_id', id)
    .join('volunteer_times', 'volunteer_times.event_time_id', 'event_times.id')
    .join('volunteers', 'volunteer_times.volunteer_id', 'volunteers.id')
    .select('first_name')
}

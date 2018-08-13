const connection = require('./connection')
const knex = require('knex')

const config = require('../../knexfile').development

const db = knex(config)

module.exports = {
  getVolunteers,
  getVolunteer,
  editVolunteer,
  addVolunteer,
  deleteVolunteer,
  volunteerExists,
  createVolunteer
}

function getVolunteers () {
  return db('volunteers').select()
}

function getVolunteer (id) {
  return db('volunteers')
    .where('id', id).first()
}

function editVolunteer (updatedVolunteer) {
  return db('volunteers')
    .where('id', updatedVolunteer.id)
    .update(updatedVolunteer)
}

function addVolunteer (newVol) {
  return db('volunteers').insert(newVol)
}

function deleteVolunteer (id) {
  return db('volunteers')
    .where('id', id).del()
}

function volunteerExists (email, conn) {
  const db = conn || connection
  return db('volunteers')
    .count('id')
    .where('email', email)
    .then(count => {
      return count[0].id > 0
    })
}

function createVolunteer (email, password, conn) {
  const db = conn || connection
  return db('volunteers')
    .insert({
      email,
      password
    })
}

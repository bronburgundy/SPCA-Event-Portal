const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/', (req, res) => {
  db.getEvents()
    .then(events => {
      res.json(events)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getEvent(id)
    .then(event => {
      res.json({event: event})
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to find Event details')
    })
})

router.put('/:id/edit', (req, res) => {
  const event = {
    id: req.params.id,
    name: req.body.name,
    startDate: req.body.start_date,
    endDate: req.body.end_date,
    location: req.body.location
  }
  db.editEvent(event)
    .then(() => {
      res.status(200).send('Event details updated')
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to update event details')
    })
})

router.post('/addevent', (req, res) => {
  const event = {
    name: req.body.name,
    startDate: req.body.start_date,
    endDate: req.body.end_date,
    location: req.body.location,
    hash: req.body.hash
  }
  db.addEvent(event)
    .then(() => {
      res.status(200).send('New event added')
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to add new event')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteEvent(id)
    .then(event => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to delete event')
    })
})

router.get('/:id/volunteers', (req, res) => {
  const id = Number(req.params.id)
  db.getVolunteersByEvent(id)
    .then(volunteers => {
      res.json(volunteers)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to get volunteer details')
    })
})
module.exports = router

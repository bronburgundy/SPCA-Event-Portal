const express = require('express')

const db = require('../db/db')

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
  const id = Number(req.params.id)
  db.editEvent(id)
  .then(event => {
    res.json({})
  })
})

const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getVolunteers()
    .then(volunteers => {
      res.json(volunteers)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to get volunteer details')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getVolunteer(id)
    .then(volunteer => {
      res.json({volunteer: volunteer})
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to get volunteer details')
    })
})

router.put('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  db.editVolunteer(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to update volunteer details')
    })
})

router.post('/addvolunteer', (req, res) => {
  const newVol = req.body
  db.addVolunteer(newVol)
    .then(() => {
      res.status(200).send('New volunteer added')
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to add new volunteer')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteVolunteer(id)
    .then(volunteer => {
      res.status(200).end()
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to delete volunteer')
    })
})

module.exports = router

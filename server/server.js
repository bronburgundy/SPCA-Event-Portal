const path = require('path')
const express = require('express')
const passport = require('passport')

const authRoute = require('./routes/auth')
const eventsRoute = require('./routes/events') // Gives the server the routes
const volunteersRoute = require('./routes/volunteers')

const server = express()

server.use(passport.initialize())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', authRoute)
server.use('/api/v1/events', eventsRoute) // Matches URL to route file
server.use('/api/v1/events/:id/volunteers', volunteersRoute)

module.exports = server

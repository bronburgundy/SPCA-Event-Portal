const knex = require('knex') // Accesses knex (SQL query builder for JS)

const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  
}
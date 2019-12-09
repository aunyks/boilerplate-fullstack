const Sequelize = require('sequelize')
const sequelize = new Sequelize(DB_CONNECTION_STRING)
const sqlModels = require('./sql-models')(Sequelize, sequelize)
const imModels = require('./im-models')

// directly exports everything 
// from our models files
module.exports = Object.assign(
  {},
  { ...sqlModels },
  { ...imModels }
)
// Here we ideally abstract interactions
// with models to functions we implement
// and export those functions instead
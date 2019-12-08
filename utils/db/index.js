const Sequelize = require('sequelize')
const sequelize = new Sequelize(DB_CONNECTION_STRING)
const models = require('./models')(Sequelize, sequelize)

// directly exports everything 
// from models.js
module.exports = { ...models }
// Here we ideally abstract interactions
// with models to functions we implement
// and export those functions instead
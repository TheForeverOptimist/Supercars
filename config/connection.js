const { connection } = require('mongoose');

require('dotenv').config()
const mongoose = require(mongoose);
const connectionString = process.env.SUPERCAR_DB
mongoose.connect(connectionString)
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... 🙌 🙌 🙌`)
})
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})
// disconnecting from mongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected ⚡️ 🔌 ⚡️')
})
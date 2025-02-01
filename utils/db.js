
const mongoose = require('mongoose')
require('dotenv').config()

mongoURL = process.env.MONGODBURL

mongoose.connect(mongoURL)

const db = mongoose.connection


db.on('connected', () => {
    console.log('DB connected...')
})


db.on('error', () => {
    console.log("DB error")
})


module.exports = db
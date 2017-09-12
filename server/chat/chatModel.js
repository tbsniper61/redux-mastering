const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chatSchema = new Schema({
  message: { type: String, required: true, min: 1},
  author: { type: String, required: true},
  time: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Chat', chatSchema)
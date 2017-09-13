const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
const URI = 'mongodb://awesomeo:awesome@ds161551.mlab.com:61551/reduxmastery1'
const chatController = require('./chat/chatController')
const app = express();
const PORT = 5000;

const db = mongoose.connection.openUri(URI);
db.on('error', () => {
  console.log('ERROR connecting to database');
});
db.once('open', () => {
  console.log(`Sucessfully connected to database @:${URI}`);
});

app.use(express.static('./'), bodyparser());

app.get('/chat', chatController.fetchMessages)
app.post('/chat', chatController.postMessage)

app.listen(PORT, () => {
  console.log(`server 👂  @ port ${PORT}`);
});

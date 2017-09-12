const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const URI = 'mongodb://awesomeo:awesome@ds161551.mlab.com:61551/reduxmastery1'
const chatController = require('./chat/chatController')
const app = express();
const PORT = 5000;

mongoose.connect(URI)

app.use(express.static('./'));

app.get('/chat', chatController.fetchMessages)
app.post('/chat', chatController.postMessage)

app.listen(PORT, () => {
  console.log(`server 👂  @ port ${PORT}`);
});

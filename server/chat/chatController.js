import Chat from './chatModel'

const chatController = {}

chatController.fetchMessages = (req, res) => {
  Chat.find({}, (err, messages) =>{
    if (err) throw err;
    if (messages) res.send(messages)
  })
}

chatController.postMessage = (req, res) => {
  Chat.create(req.body, (err, message) => {
    if (err) throw err;
    if (message) res.send(message)
  })
}

module.exports = chatController
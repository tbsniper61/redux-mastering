const Chat = require('./chatModel');

const chatController = {};

chatController.fetchMessages = (req, res) => {
  Chat.find({}, (err, messages) => {
    if (err) throw err;
    if (messages) res.send(messages);
  });
};

chatController.postMessage = (req, res) => {
  Chat.create(req.body, (err, message) => {
    if (err) throw err;
    if (message) res.send(message);
  });
};

chatController.deleteMessage = (req, res) => {
  Chat.findByIdAndRemove(req.params.messageID, (err, message) => {
    if (err) throw err;
    if (message) res.send(message);
  });
};

chatController.updateMessage = (req, res) => {
  Chat.findByIdAndUpdate(req.params.messageID, req.body, { new: true }, (err, message) => {
    if (err) throw err;
    if (message) res.send(message);
  });
};
module.exports = chatController;

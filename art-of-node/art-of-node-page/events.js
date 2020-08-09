var chatClient = require('my-chat-client')

function onConnect() {
  // have the UI show we are connected
}

function onConnectionError(error) {
  // show error to the user
}

function onDisconnect() {
  // tell user that they have been disconnected
}

function onMessage(message) {
  // show the chat room message in the UI
}

chatClient.connect(
  'http://mychatserver.com',
  onConnect,
  onConnectionError,
  onDisconnect,
  onMessage
)

// NOTES : Event is convenient for global emission e.g for broadcast when other people/server depends on the event emitting
// e.g. when game streaming and a user enters or exits, there is a broadcast of it
// CONNECTION

import {
  closeConnection,
  openConnection,
  updateMembersDOM,
} from "./app/connection";

// MSG
import {
  sendMessage,
  createMessageElement,
  addMessageToListDOM,
  msgHandlers,
  sendMessage,
  createMessageElement,
  msgHandlers,
} from "./app/message.creation";

class ChatComponents {
  loadChatComponents() {
    const openConnection = new openConnection();
    const closeConnection = new closeConnection();
    const updateMembersDOM = new updateMembersDOM();

    const sendMessage = new sendMessage();
    const createMessageElement = new createMessageElement();
    const msgHandlers = new msgHandlers();
  }
}

export { ChatComponents };

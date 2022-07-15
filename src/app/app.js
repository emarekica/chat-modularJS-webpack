// CONNECTION

import {
  openConnection,
  closeConnection,
  updateMembersDOM,
} from "connection.js";

// MSG
import {
  createMessageElement,
  sendMessage,
  createMessageElement,
  addMessageToListDOM,
  msgHandlers,
} from "./message.creation.js";

export {
  openConnection,
  closeConnection,
  updateMembersDOM,
  sendMessage,
  createMessageElement,
  addMessageToListDOM,
  msgHandlers,
};

/* import { bestFruits } from "./preferences.js";
import { multiply } from "./calculation.js";
import aboutMe from "./bio.js";

export { bestFruits, multiply, aboutMe }; */

// const loadChatComponents = function () {
//   const openConnection = new openConnection();
//   const closeConnection = new closeConnection();
//   const updateMembersDOM = new updateMembersDOM();

//   const sendMessage = new sendMessage();
//   const createMessageElement = new createMessageElement();
//   const addMessageToListDOM = new addMessageToListDOM();
//   const msgHandlers = new msgHandlers();
// };

// class ChatComponents {
//   loadChatComponents;
// }

// export { ChatComponents };

import { msgSeparator } from "../helpers/msgSeparator.js";
import { drone } from "../helpers/client.js";
import { msgDateTime } from "./dateTime.js";

import DOM from "./domEnum.js";

export const input = DOM.INPUT;

//

// ------------ FUNCTIONS

function createMessageElement(text, member) {
  // --- Separate messages from other users and "me"
  // Check if the messages are from "me"
  msgSeparator(member);

  // --- Creats and add msg to DOM
  const msg = document.createElement("div");
  msg.className = "messageText";
  msg.appendChild(document.createTextNode(text));

  // --- Create username with a name & color
  const profile = document.createElement("div");
  profile.className = "profile";

  const character = document.createElement("div");
  character.appendChild(document.createTextNode(name));
  character.style.color = color;
  character.className = "name";
  const { name, color } = member.clientData;

  profile.appendChild(character);

  // ---Add date & time to the msg
  msgDateTime;

  //Combine user profile and msg into one element based on whether the message is from you or other user
  const element = document.createElement("div");
  element.appendChild(profile);
  element.appendChild(msg);
  element.className = className; // check
  element.append(msgDateTime);

  console.log(element);
  return element;
}

function sendMessage() {
  const value = DOM.INPUT.value;
  // console.log(value);

  if (value === "") {
    return;
  }

  DOM.INPUT.value = "";
  drone.publish({
    room: "observable-room",
    message: value,
  });
}

// add msg to chat window
function addMessageToListDOM(text, member) {
  const element = DOM.MESSAGE;
  const wasTop =
    element.scrollTop === element.scrollHeight - element.clientHeight;
  element.appendChild(createMessageElement(text, member));
  if (wasTop) {
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
}

//

// ------------ EVENT LISTENERS

const msgHandlers = function () {
  // Sending messages
  DOM.FORM.addEventListener("submit", sendMessage);

  // Msg max length reached
  input.addEventListener("keydown", function () {
    if (this.value.length >= 500) {
      modalError.classList.add("open");
      modalError.textContent = "You have exceeded the maximum message length.";
    }
  });
};

//

export { addMessageToListDOM, sendMessage, createMessageElement };

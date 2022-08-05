console.log("messages.js");

import { DOM } from "../helpers/dom.js";
import { drone } from "../helpers/drone.js";
import { createMemberElement } from "./members.js";
import { modalError } from "../index.js";

function createMessageElement(text, member) {
  const el = document.createElement("div");

  // Define "me"
  const clientID = drone.clientId;
  const messageFromMe = member.id === clientID;
  const className = messageFromMe ? "message currentMember" : "message";

  // add date/time
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}`.padStart(2, "0");
  const date = new Intl.DateTimeFormat(navigator.language).format(now);

  const msgDateTime = document.createElement("div");
  msgDateTime.textContent = `${date}, ${time}`;
  msgDateTime.classList.add("time-date");

  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.append(msgDateTime);
  el.appendChild = "message";
  el.className = className;

  return el;
}

export function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}

const input = DOM.input;

input.addEventListener("keydown", function () {
  if (this.value.length >= 500) {
    // modal with msg when character nuber exceeded
    modalError.classList.add("open");
    modalError.textContent = "You have exceeded the maximum message length.";
  }
});

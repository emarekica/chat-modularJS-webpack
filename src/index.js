console.log("index.js");

import { drone } from "./helpers/drone.js";
import { updateMembersDOM, members } from "./modules/members.js";
import { addMessageToListDOM } from "./modules/messages.js";
import { sendMessage } from "./modules/button.js";

import "./chat.scss";

//

export const modalError = document.querySelector(".modal-error");

// --- event listeners

drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Successfully connected to Scaledrone");
});

const room = drone.subscribe("observable-room");
room.on("open", (error) => {
  if (error) {
    modalError.classList.add("open");
    modalError.textContent =
      "An error has occured while connecting to the service. Please, try again.";
    return console.error(error);
  }
  console.log("Successfully joined room");
});

// List of currently online members, emitted once
room.on("members", (m) => {
  members.push(m);
  updateMembersDOM();
});

// User joined the room
room.on("member_join", (member) => {
  members.push(member);
  updateMembersDOM();
});

// User left the room
room.on("member_leave", ({ id }) => {
  const index = members.findIndex((member) => member.id === id);
  members.splice(index, 1);
  updateMembersDOM();
});

// data event and listener to listen to the messages sent by users
room.on("data", (text, member) => {
  if (member) {
    addMessageToListDOM(text, member);
  }
});

modalError.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-error")) {
    modalError.classList.remove("open");
  }
});

sendMessage(drone);

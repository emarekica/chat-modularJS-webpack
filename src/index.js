import { drone } from "./helpers/client.js";
import { errorHandler } from "./app/errorHandler.js";
import { updateMembersDOM } from "./app/members.js";
import {
  addMessageToListDOM,
  sendMessage,
  createMessageElement,
} from "./app/messages.js";

//

export let members = [];

// ------------ event listeners

// --- OPEN CONNECTION

drone.on("open", (error) => {
  if (error) {
    errorHandler();

    return console.error(error);
  }
  console.log("Successfully connected to Scaledrone");

  // Listen for messages
  const room = drone.subscribe("observable-room");

  // Join room
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    console.log("Successfully joined room");
  });

  // Emits an array of members that have joined the room
  room.on("members", (m) => {
    members = m;
    updateMembersDOM();
  });

  // New member joins the room
  room.on("member_join", (member) => {
    members.push(member);
    updateMembersDOM();
  });

  // Member leaves the room
  room.on("member_leave", ({ id }) => {
    const index = members.findIndex((member) => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  // Listen to messages sent by users & add them to messages <div>
  room.on("data", (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    }
  });
});

createMessageElement();
sendMessage();

// --- CLOSE CONNECTION

drone.on("close", (event) => {
  console.log("Connection was closed", event);
});

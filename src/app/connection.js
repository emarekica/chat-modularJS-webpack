import { getRandomColor } from "../helpers/color.randomizer.js";
import { getRandomName } from "../helpers/name.randomizer.js";
import { addMessageToListDOM } from "./message.creation.js";
import { DOM } from "./message.creation.js";

// Connecting to Scaledrone channel ID
const CLIENT_ID = "M4trM8H1WVeEhszi";

// Creating instance for a single connection
export const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];
const modalError = document.querySelector(".modal-error");

//

// ------------ OPEN CONNECTION

// A connection has been opened
drone.on("open", (error) => {
  if (error) {
    modalError.classList.add("open");
    modalError.textContent =
      "An error has occured while connecting to the service. Please, try again.";

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

//

// ------------ CLOSE CONNECTION

drone.on("close", (event) => {
  console.log("Connection was closed", event);
});

modalError.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-error")) {
    modalError.classList.remove("open");
  }
});

// ------------ UPDATE WHO'S ONLINE

export function updateMembersDOM() {
  DOM.members.innerHTML = `${members.length} artists at the wall: ${members
    .map((value) => {
      return `<span style="color: ${value.clientData.color}">${value.clientData.name}</span>`;
    })
    .join(", ")}`;

  // console.log(members); // object
  // console.log(DOM.members); // HTML element
}

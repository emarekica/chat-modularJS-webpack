console.log("members.js");

import { DOM } from "../helpers/dom.js";
import { drone } from "../helpers/drone.js";

export let members = [];

const memberColor = drone.args[1].data["color"];
const memberName = drone.args[1].data["name"];

export function createMemberElement(member) {
  // // Define "me"
  // const clientID = drone.clientId;
  // const messageFromMe = member.id === clientID;

  // Check if the message is from me
  // const className = messageFromMe ? "message currentMember" : "message";
  const { name, color } = member.clientData;

  const user = document.createElement("div");
  user.appendChild(document.createTextNode(name));
  user.className = "member";
  user.style.color = color;

  return user;
}

export function updateMembersDOM() {
  DOM.membersList.innerHTML = `${members.length} artists at the wall:

  ${members
    .map((value) => {
      return `<span style="color: ${memberColor}">${memberName}</span>`;
    })
    .join(", ")}`;
}

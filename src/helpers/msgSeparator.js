import { drone, clientID } from "./client";

// --- Separate messages from other users and "me"
const msgSeparator = function (member) {
  clientID = drone.clientID;
  const messageFromMe = member.id === clientID;
  console.log(member.id);

  // Check if the messages are from "me"
  const className = messageFromMe ? "message currentMember" : "message";
  console.log(className);

  return className;
};

export { msgSeparator };

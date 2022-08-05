console.log("button.js");

import { DOM } from "../helpers/dom.js";
import { drone } from "../helpers/drone.js";

const sendMessage = function () {
  const value = DOM.input.value;
  if (value === "") {
    return;
  }

  DOM.input.value = "";

  let messageSent = drone.publish({
    room: "observable-room",
    message: value,
  });

  return messageSent;
};

DOM.form.addEventListener("submit", sendMessage);

export { sendMessage };

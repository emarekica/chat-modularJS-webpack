// update who's online

import DOM from "./domEnum.js";
import { members } from "../index.js";

function updateMembersDOM() {
  DOM.MEMBERS.innerHTML = `${members.length} artists at the wall: ${members
    .map((value) => {
      return `<span style="color: ${value.clientData.color}">${value.clientData.name}</span>`;
    })
    .join(", ")}`;

  // console.log(members); // object
  // console.log(DOM.MEMBERS); // HTML element
}

export { updateMembersDOM };

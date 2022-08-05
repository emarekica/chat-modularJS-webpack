console.log("drone.js");

import { getRandomName } from "./randomName.js";
import { getRandomColor } from "./randomColor.js";

const CHANNEL_ID = "M4trM8H1WVeEhszi";

export const drone = new ScaleDrone(CHANNEL_ID, {
  data: {
    // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

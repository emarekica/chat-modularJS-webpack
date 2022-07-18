import { getRandomColor } from "../helpers/randomColor.js";
import { getRandomName } from "../helpers/randomName.js";

//

const clientID = process.env.CLIENT_ID;

const drone = new ScaleDrone(clientID, {
  data: {
    name: getRandomName(),
    color: getRandomColor(),
  },
});

export default drone;

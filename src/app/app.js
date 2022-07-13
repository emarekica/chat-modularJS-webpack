// import { connection } from "./connection.js";
// // import { msgCreation } from "./message.creation.js";
// // import { DOM } from "./message.creation.js";

// // const messageCreation = new msgCreation(DOM);

// export const run = function () {
//   connection();
//   messageCreation();
// };

/* 

// import components that are in the same folder as app

import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();

    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);

    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;

      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

*/

const modalError = document.querySelector(".modal-error");

const errorHandler = function () {
  modalError.classList.add("open");
  modalError.textContent =
    "An error has occured while connecting to the service. Please, try again.";
};

modalError.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-error")) {
    modalError.classList.remove("open");
  }
});

export { errorHandler };

const now = new Date();
const time = `${now.getHours()}:${now.getMinutes()}`.padStart(2, "0");
const date = new Intl.DateTimeFormat(navigator.language).format(now);
const msgDateTime = document.createElement("div");

msgDateTime.textContent = `${date}, ${time}`;
msgDateTime.classList.add("time-date");

export { msgDateTime };

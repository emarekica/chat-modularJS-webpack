// exported to connection.js

export function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

# CHAT APP

**Algebra Front-end Developer Course 2021 - final project**

This is an upgraded version of the final project for the forementioned educational program.

The [initial version](https://github.com/emarekica/seminarski-algebra) was made with HTML5, CSS3, "vanilla" JavaScript and connected to Scaledrone.

This version is upgraded with ES6 Modules, SCSS and Babel, bundled with Webpack5.

<br>

---

<br>

## Technologies

<br>

- HTML5
- SCSS
- "vanilla" JavaScript
- [Scaledrone](https://www.scaledrone.com/)
- ES6 Modules
- Babel
- Webpack5

<br><br>

---

<br>

## Features

<br>

- Sends messages with autor name
- Recognizes sender from the rest of the chat members by showing the messages on the right (sender) and on the left (others)
- Random nickname generator and random name color picker
- Connected to Scaledrone
- Displays active members and notifications who joined
- Autoexpanding input area with a scrollbar in case of a larger text input
- Responsive design

<br><br>

---

<br>

## Impovement ideas

<br>

- [x] limit number of characters in the form input field + alert message
- [x] add modal window when error while connecting
- [x] add date & time with every message sent
- [x] add small modal window with alert when character limit reached
- [x] add SCSS
- [x] add ES6 Modules
- [x] make version with Webpack5

<br><br>

---

<br>

## Connect to Scaledrone

<br>

You can create your Scaledrone channel for free [here](https://dashboard.scaledrone.com/channels).
To connect to the channel you need to paste your channel ID in the `wall-chat.js`.
<br><br>

```js
// Connecting to Scaledrone channel ID
const CLIENT_ID = "M5tfM9H0WVkEzsTi";
```

<br><br>

---

<br>

## Mockup

<br><br>

![mockups](./src/visuals/wall-chat-mockups.png)
<br><br>

---

<br>

## Try it

Open the chat in two or more different windows/tabs.

[Start the chat!](chat-scaledrone-webpack.netlify.app)

---

### Licence

[MIT](https://choosealicense.com/licenses/mit/)

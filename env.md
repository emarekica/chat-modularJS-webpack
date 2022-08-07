# ENVIRONEMT VARIABLES

<br>

Most configuration really isn't about the app -- it's about where the app runs, what keys it needs to communicate with third party API's, the db password and username, etc... They're just deployment details -- and there are lots of tools to help manage environment variables -- not the least handy being a simple .env file with all your settings. Simply source the appropriate env before you launch the app in the given env (you could make it part of a launch script, for instance).
<br><br>

env files look like this:
<br>
SOMEVAR="somevalue"
ANOTHERVAR="anothervalue"
<br><br>

To source it:
<br>

    $ source dev.env  # or staging.env, or production.env, depending on where you're deploying to

<br><br>

Don't check these files into the repo... instead, check in something like dev.example.env, containing some sensible defaults, minus your app secrets, of course. Devs wishing to collaborate should copy the file to the real filename, set the values appropriately, and they're off to the races.
<br>

It's easy to add scripts via npm, so you can source the appropriate env file by running commands:
<br>

In your package.json:
<br><br>

    scripts: {
      "start-dev": "source dev.env; node server.js"
      "start-prod": "source prod.env; node server.js"
    }

<br><br>

Then start it up:
<br>

    $ npm run start-prod

<br><br>

<hr />
<br>

[Resource](https://www.google.com/search?q=ENV&rlz=1C5CHFA_enHR951HR951&oq=ENV&aqs=chrome..69i57j0i271l3j69i65l3j69i60.363j0j4&sourceid=chrome&ie=UTF-8)

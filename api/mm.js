const express = require("express");
const helmet = require("helmet");
const moment = require("moment");
const fetch = require("node-fetch");

const URL =
  "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=e9da7197d56595fa7daf3531adf0530b&chart_name=top&country=IT&f_has_lyrics=true&format=json&page_size=100";

const app = express();

app.use(helmet());

app.get("*", async (req, res) => {
  res.set("Content-Type", "application/json");
  //const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  //res.status(200).send(currentTime);

  await fetch(URL)
    .then(r => r.json())
    .then(({ message }) => {
      console.log(message.body);
      res.status(200).send(message.body);
    });
});

module.exports = app;

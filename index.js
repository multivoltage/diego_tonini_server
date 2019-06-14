// const micro = require("micro");
// const fetch = require("node-fetch");

// const URL =
//   "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=e9da7197d56595fa7daf3531adf0530b&chart_name=top&country=IT&f_has_lyrics=true&format=json&page_size=100";

// module.exports = micro(async (req, res) => {
//   await fetch(URL)
//     .then(r => r.json())
//     .then(({ message }) => {
//       console.log(message.body);
//       res.end(message.body);
//     });
// });
const micro = require("micro");

module.exports = micro((req, res) => {
  return "Hello from Micro on Now 2.0!";
});

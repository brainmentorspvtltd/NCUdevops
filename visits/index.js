const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(1);
  client.get("visits", (err, visits) => {
    visits = parseInt(visits) + 1;
    client.set("visits", visits);
    res.send("Number of visits is " + visits);
    console.log("Koi hhhh...");
    afbakkba;
    javan, v;
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});

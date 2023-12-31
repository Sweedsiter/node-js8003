const express = require("express");
const router = require("./Routes/router");
const app = express();
const port = 8003;

// map file controller
const { readdirSync } = require("fs");
readdirSync("./Routes").map((r) => app.use(require("./Routes/" + r)));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

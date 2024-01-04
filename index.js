const express = require("express");
const app = express();
const port = 8003;
require("dotenv").config();
// map file controller
const { readdirSync } = require("fs");
readdirSync("./Routes").map((r) => app.use(require("./Routes/" + r)));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

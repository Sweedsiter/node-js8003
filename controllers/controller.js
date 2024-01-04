// home page

exports.home = async (req, res) => {
  await res.render("index", {
    key: "red",
  });
  console.log("Hello " + req.url + " home");
  // console.log(process.env.WEATER_API_KEY);
  // console.log(process.env.COLOR);
};

exports.heatEdit = async (req, res) => {
  await fs.writeFile("./public/heater.txt", "Hello content", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  await fs.readFile("./public/heater.txt", "utf-8", function (rer, data) {
    if (rer) {
      console.log("เกิดผิตพลาด", rer);
    } else {
      res.send(data);
    }
  });
};

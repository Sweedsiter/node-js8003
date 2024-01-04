// home page

exports.home = async (req, res) => {
  await res.render("index", {
    key: "red",
  });
  console.log("Hello " + req.url + " home");
  // console.log(process.env.WEATER_API_KEY);
  // console.log(process.env.COLOR);
};

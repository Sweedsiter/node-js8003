// home page
exports.home = async (req, res) => {
  await res.send("Hello Home page");
  console.log("Hello " + req.url + " home");
};

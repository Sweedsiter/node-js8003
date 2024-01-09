// home page

exports.home = async (req, res) => {
  await res.render("index", {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  });
  console.log("Hello " + req.url + " home");
};

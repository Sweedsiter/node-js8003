const fs = require("fs");

// map file controller

exports.addhaeder = async (req, res) => {
  const heaterContact = req.body.heaterContact;
  const links = req.body.links;
  await fs.writeFile(
    `./views/header.ejs`,
    `<div>
        <div class="logo"><h1>${heaterContact}</h1></div>
        <div class="links"><h1>${links}</h1></div>
    </div>`,
    function (err) {
      if (err) throw err;
      console.log(`Add header ${heaterContact} เรียบร้อย`);
    },
  );
  await fs.readFile("./views/header.ejs", "utf-8", function (rer, data) {
    if (rer) {
      console.log("เกิดผิตพลาด", rer);
    } else {
      res.redirect("/");
    }
  });
};

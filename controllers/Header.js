const fs = require("fs");

exports.addhaeder = async (req, res) => {
  const heaterContact = req.body.heaterContact;
  await fs.writeFile(
    `./views/heater.ejs`,
    `<h1>${heaterContact}</h1>`,
    function (err) {
      if (err) throw err;
      console.log(`Add header ${heaterContact} เรียบร้อย`);
    },
  );
  await fs.readFile("./views/heater.ejs", "utf-8", function (rer, data) {
    if (rer) {
      console.log("เกิดผิตพลาด", rer);
    } else {
      res.redirect("/");
    }
  });
};

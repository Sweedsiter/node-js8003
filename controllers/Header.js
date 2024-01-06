const fs = require("fs");
// map file controller
exports.addhaeder = async (req, res) => {
  const heaterContact = req.body.heaterContact;
  const links1 = req.body.links1;
  const links2 = req.body.links2;
  const links3 = req.body.links3;
  const links4 = req.body.links4;
  const color = req.body.color;
  const bg_color = req.body.bg_color;
  await fs.writeFile(
    `./views/header.ejs`,
    `
    <link href="/css/Header.css" rel="stylesheet" type="text/css">
    <header class= "header" style="color:${color};background-color:${bg_color}" >
        <div class="logo " style="color:${color}" name="F_logoname"><h3> <a href="/" style="color:#fffafa" >${heaterContact}</a></h3></div>
        <div class="links" >
           <a href="/" style="color:${color}" >${links1}</a>
           <a href="/product" style="color:${color}">${links2}</a>
           <a href="/about" style="color:${color}">${links3}</a>
           <a href="contact" style="color:${color}">${links4}</a>            
           <a href="/dashboard" style="color:${color}"><i class="fa-solid fa-user"></i></a>  
        </div>
     </header>
     <script src="/client.js"></script>
   `,
    function (err) {
      if (err) throw err;
      console.log(`Add header เรียบร้อย`);
    },
  );
  await fs.readFile("./views/header.ejs", "utf-8", function (rer, data) {
    if (rer) {
      console.log("เกิดผิตพลาด", rer);
    } else {
      res.redirect("/dashboard");
    }
  });
};

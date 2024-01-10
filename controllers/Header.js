const fs = require("fs");
// map file controller
exports.addhaeder = async (req, res) => {
  const heaterContact = req.body.heaterContact;
  const links1 = req.body.links1;
  const links2 = req.body.links2;
  const links3 = req.body.links3;
  const links4 = req.body.links4;
  const color = req.body.color;
  const logoimg = req.file.filename;
  const bg_color = req.body.bg_color;
  // สร้าง Header จอใหญ่
  await fs.writeFile(
    `./views/header.ejs`,
    `
    <link href="/css/Header.css" rel="stylesheet" type="text/css">
    <header class= "header" style="color:${color};background-color:${bg_color}" >
        <div class="logo " style="color:${color}" name="F_logoname"><h3> <a href="/" style="color:#fffafa" >${heaterContact}<img src="/avatar/logo/${logoimg}" alt="Logo" height="35"></a></h3></div>
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

  // สร้าง Header mobile
  await fs.writeFile(
    `./views/Head/Nav.ejs`,
    `
    <link href="/css/Nav.css" rel="stylesheet" type="text/css">
<div class="Nav">
    <header class= "NavContent" style="color:${color};background-color:${bg_color}" >
        <div class="logo " style="color:${color}"  name="F_logoname"><h3 style="color:${color}" > <a href="/" style="color:${color}">${heaterContact}<img src="/avatar/logo/${logoimg}" alt="Logo" height="35"></a></h3></div>
        <div class='menu' style="color:${color}"   onclick="gettext()"><i class="fa-solid fa-bars" style="color:${color}" ></i></div> 
     </header> 
     <div id="demo" class='Black' onclick="gettext()" style="color:${color};background-color:${bg_color}">
        <a href="/" style="color:${color}" >${links1}</a>
        <a href="/product" style="color:${color}">${links2}</a>
        <a href="/about" style="color:${color}">${links3}</a>
        <a href="contact" style="color:${color}">${links4}</a>            
        <a href="/dashboard" style="color:${color}"><i class="fa-solid fa-user icon"></i>Dashboard</a>  
     </div>
     <script>
        function gettext() {            
           var element = document.getElementById("demo");
           element.classList.toggle("Open_nav");
        }   
      </script>
</div>
   `,
    function (err) {
      if (err) throw err;
      console.log(`Add header mobile เรียบร้อย`);
    },
  );

  await fs.readFile("./views/header.ejs", "utf-8", function (rer, data) {
    if (rer) {
      console.log("เกิดผิตพลาด", rer);
    } else {
      res.render("Dashboard");
    }
  });
};

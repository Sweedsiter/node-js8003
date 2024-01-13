const fs = require("fs");

exports.H001 = async (req, res) => {
  // File Image
  // const H001BG = req.file.filename;
  // Creat files
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-company.txt",
    req.body.company,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-company_content.txt",
    req.body.company_content,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-Click1.txt",
    req.body.Click1,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-Click2.txt",
    req.body.Click2,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-Click3.txt",
    req.body.Click3,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/HomePage001-Click4.txt",
    req.body.Click4,
    function (err) {},
  );

  //
  await fs.writeFile(
    `./views/Home/HomePage001.ejs`,
    `
    <style>
    .content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 500px;
}
.H001 {  
  background-image: url( "/avatar/Home/${req.file.filename}"); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0;
  margin: 0;
  width: 100%;
}
.H001 .L {
  margin-right: 1rem;
  width:30%;
}
.H001 .L h1 {
  margin-bottom: 1rem;
}
.H001 .L .lineBox {
  position: relative;
  width: 100%;
}
.H001 .L .lineBox .small {
  height: 0.5rem;
}
.H001 .L .lineBox .largar {
  position: absolute;
  height: 1rem;
  right: 0;
  transform: translateY(-0.75rem);
  width: 30%;
}
.H001 .L > P {
  margin-top: 1rem;
  float: left;
}
.H001 .R {
  width: fit-content;
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px 50px;
  align-items: center;
  padding: 5rem;
}
.H001 .R > div {
  border: 1px solid black;
  padding: 1rem 2rem 0.5rem 2rem;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  box-shadow: 1px 1px 16px gray;
  transition: 0.2s;
}
.H001 .R > div:hover {
  padding: 1rem 2rem;
  font-size: larger;
}
.H001 .R > div p a{

}
.H001 .R > div i {
  font-size: 2.5rem;
}
@media only screen and (max-width: 600px) {
  .content {
    margin-top: -3rem;
    height: fit-content;
    flex-direction: column;
    align-self: center;
    align-items: center;
  }
.H001 .L {
  margin-top:3rem;
    margin-right: 0rem;
    padding: 5rem 2rem 1rem 2rem;
    width:100%;
  }
}
</style>
<!-- View Html -->
<div class="content H001" >
    <div class="L">
        <h1><%- include('../../public/avatar/Home/HomePage001-company.txt');%></h1> 
        <div class="lineBox" >
            <div class="small" style=" background-color:<%- include('../../public/avatar/page/fontColor.txt')%>"></div>
            <div class="largar" style=" background-color:<%- include('../../public/avatar/page/fontColor.txt')%>"></div>
        </div>
        <p><%- include('../../public/avatar/Home/HomePage001-company_content.txt');%> </p>
        
    </div>
    <div class="R">
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-brands fa-algolia"></i>
            <p><a href="/" style="color:  <%- include('../../public/avatar/page/fontColor.txt'); %>"><%- include('../../public/avatar/Home/HomePage001-Click1.txt');%></a></p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-solid fa-bars-progress"></i>
            <p><a href="/product" style="color:  <%- include('../../public/avatar/page/fontColor.txt'); %>"><%- include('../../public/avatar/Home/HomePage001-Click2.txt');%></a></p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-regular fa-address-card"></i>
            <p><a href="/about" style="color:  <%- include('../../public/avatar/page/fontColor.txt'); %>"><%- include('../../public/avatar/Home/HomePage001-Click3.txt');%></a></p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-regular fa-address-book"></i>
            <p><a href="/contact" style="color:  <%- include('../../public/avatar/page/fontColor.txt'); %>"><%- include('../../public/avatar/Home/HomePage001-Click4.txt');%></a></p>
        </div>      
    </div>
</div>   
   `,
    function (err) {
      if (err) throw err;
      console.log(`Add HomPage001 เรียบร้อย`);
    },
  );
  await res.redirect("/dashboard");
  console.log("H001 Edit Ok");
};

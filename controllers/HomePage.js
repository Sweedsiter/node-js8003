const fs = require("fs");

exports.H001 = async (req, res) => {
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
  background-image: url("https://static.vecteezy.com/system/resources/previews/001/984/880/non_2x/abstract-colorful-geometric-overlapping-background-and-texture-free-vector.jpg");
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
  box-shadow: 1px 1px 3px gray;
  transition: 0.2s;
}
.H001 .R > div:hover {
  padding: 1rem 2rem;
  font-size: larger;
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
    margin-right: 0rem;
    padding: 5rem 2rem 1rem 2rem;
    width:100%;
  }
}
</style>
<!-- View Html -->
<div class="content H001" >
    <div class="L">
        <h1>welcome to -------</h1> 
        <div class="lineBox" >
            <div class="small" style=" background-color:<%- include('../../public/avatar/page/fontColor.txt')%>"></div>
            <div class="largar" style=" background-color:<%- include('../../public/avatar/page/fontColor.txt')%>"></div>
        </div>
        <p>อย่าโกหกฉัน อย่าทำอย่างนั้น หลอกลวงกัน เธอนั้นจะได้อะไร   มื่อเธอมีเขา อยู่เต็มหัวใจ เก็บมานานอยู่ในหัวใจ ฉันรู้ถึงเธอจะปิด  ที่ยอมให้เธอหลอกกันเรื่อยม
            สิ่งที่เธอทำมันรุนแรง แกล้งรักให้ใจฉันเจ็บ
            เก็บมานานอยู่ในหัวใจ ฉันรู้ถึงเธอจะปิด  ที่ยอมให้เธอหลอกกันเรื่อยมา           
             ที่จะยอมให้เธอจากไป เป็นของเขาจริงๆ.
             <!-- <%- include('../../public/avatar/page/backgroundColor.txt'); %>  -->
    </div>
    <div class="R">
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-brands fa-algolia"></i>
            <p>Home</p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-solid fa-bars-progress"></i>
            <p>Products</p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-regular fa-address-card"></i>
            <p>About</p>
        </div>
        <div style="background-color:  <%- include('../../public/avatar/page/backgroundColor.txt'); %> ">
            <i class="fa-regular fa-address-book"></i>
            <p>Contact</p>
        </div>      
    </div>
</div>   
   `,
    function (err) {
      if (err) throw err;
      console.log(`Add HomPage001 เรียบร้อย`);
    },
  );
  await res.render("Dashboard");
  console.log("H001 Edit Ok");
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const timeExpire = 18000; //1นาที เท่ากับ 6000
  if (username === "Peter@gmail.com" && password === "12345678") {
    req.session.username = username;
    req.session.password = password;
    req.session.login = true;
    req.session.cookie.maxAge = timeExpire;
    res.render("Dashboard");
  } else {
    res.render("Login");
  }
  console.log("Addmin Login");
};
// logut
exports.logut = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};

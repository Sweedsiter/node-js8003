exports.login = (req, res) => {
  const name = process.env.USERNAME;
  const pass = process.env.PASSWORD;
  const username = req.body.username;
  const password = req.body.password;
  const timeExpire = 18000; //1นาที เท่ากับ 6000
  if (username === name && password === pass) {
    req.session.username = username;
    req.session.password = password;
    req.session.login = true;
    // req.session.cookie.maxAge = timeExpire;
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

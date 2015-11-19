const verifyLogin = function (req, res, next) {
  console.log(`${new Date().toLocaleString()}: login check...`);
  console.log("----- req.session -----");
  console.log(req.session);
  console.log("----- req.cookies -----");
  console.log(req.cookies);

  if (req.session.user) {
    next();
  } else {
    console.log("login verification failed, redirect to index");
    res.redirect("/");
  }
};

module.exports = verifyLogin;

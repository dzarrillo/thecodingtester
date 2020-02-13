const passport = require("passport");

module.exports = app => {
  // The googlestrategy looks for the "google" string
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // The "google" identifies google to use the googlestrategy
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // res.send(req.user);
      // console.log(`Login ${JSON.stringify(req.user)}`);
      res.redirect("/home");
    }
  );

  app.get("/api/logout", (req, res) => {
    // console.log("In logout")
    req.logout();
    // res.send(req.user);
    res.redirect("/home");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

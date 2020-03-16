const passport = require("passport");

const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/user");
const bcrypt = require("bcrypt");

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
      res.redirect("/blog");
    }
  );

  app.get("/api/logout", (req, res) => {
    // console.log("In logout")
    req.logout();
    // res.send(req.user);
    res.redirect("/home");
  });

  app.get("/api/current_user", (req, res, next) => {
    res.send(req.user);
  });


  // sign-in without using google
  app.post("/api/sign_in", (req, res) => {
    const { body } = req;
    const { name } = body;
    const { email } = body;
    const { password } = body;

    console.log(`User data: ${name} ${email} ${password}`);
     saveUser = async () => {
      try {
        console.log(`User data: ${name} ${email} ${password}`);
        // Lets check to see if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          console.log(`User already exists in database`);
          // done(null, existingUser);
          return res.send({
            success: true,
            message: "User already exists in database!"
          });
          // User already exists no need to save to database
        } else {
          console.log(`Save User data: ${name} ${email} ${password}`);
          
          try {
            // encrypt password
            // const salt = await bcrypt.genSalt(10);
            // const hashedPassword = await bcrypt.hash(password);

            const user = await User.create({
              name: name,
              email: email,
              password: password
            });
            // done(null, user);
            return res.send({
              success: true,
              message: "Signed in"
            });
          } catch (err) {
            console.log("error " + err);
          }
        }
      } catch (err) {
        console.log("bad error " + err);
      }
    };

    saveUser();
    
  });
};

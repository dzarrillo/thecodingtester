const passport = require("passport");
const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  // The googlestrategy looks for the "google" string
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // The "google" identifies google to use the googlestrategy
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // res.send(req.user);
      // console.log(`Login ${JSON.stringify(req.user)}`);
      res.redirect("/resources");
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

  // Using local-strategy for user log in authentication
  // app.post("/api/sign_in", (req, res, next) => {
  //   passport.authenticate("local", {
  //     successRedirect: "/resources",
  //     failureRedirect: "/sign_in"
  //    }) (req, res, next);
  //  });
  app.post("/api/sign_in",
    passport.authenticate("local", null),
    function(req, res, info) {
      console.log(`User logged in now redirect! ${info}`);
      
      //res.redirect(307, "/resources");
      res.send("success");
    });

  // Register first time user
  app.post("/api/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(`User data => ${name} ${email} ${password} ${password2}`);

    // Check required fields & send back any errors
    let errors = [];
    if (!name || !email || !password || !password2) {
      errors.push({ msg: "Please fill in all fields!" });
    }
    // Check if passwords match
    if (password !== password2) {
      errors.push({ msg: "Passwords do not match!" });
    }
    // Check Password length
    if (password.length < 8) {
      errors.push({ msg: "Password must be at least 8 characters long!" });
    }

    if (errors.length > 0) {
      // console.log(`Error => ${errors[0]}`);
      console.log("Error => " + errors[0].msg);
      // res.send("Errors " + errors[0].msg);
      res.send({ Errors: errors[0].msg });
    } else {
      // Check to see if user already exists in database
      User.findOne({ email: email })
        .then((user) => {
          if (user) {
            // User/email already exists, notify user and have them log in
            console.log(`User already exists: ${user}`);
            res.send("User already exists, please sign in!");
          } else {
            // Create new user
            const newUser = new User({
              name: name,
              email: email,
              password: password,
            });
            console.log(`New User: ${newUser}`);

            // Before saving to database we must encrypt password using bcrypt
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                newUser.password = hash;
                // Now we can save new user
                newUser
                  .save()
                  .then((user) => {
                    console.log(`New User saved: ${user}`);
                    res.status(200).send("User saved!");
                  })
                  .catch((err) => {
                    console.log(`Error saving new user`);
                    res.send("Failed saving new User");
                  });
              });
            });
          }
        })
        .catch((err) => {
          console.log(`Database connection error: ${err}`);
          res.send("Database connection error!");
        });
    }
  });
};

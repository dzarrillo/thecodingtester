const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const config = require("../config/config");
// const user = mongoose.model("users");
const User = require("../models/user");

// user.id is the shortcut to the auto generated mongodb _id
// The reason why we use mongodb is because we might use facebook, github, twitter ....
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google_id,
      clientSecret: config.auth.google_secret,
      callbackURL: "/auth/google/callback"
    },

    async (accessToken, refreshToken, profile, done) => {
      //Save to database
      //   console.log("access token: ", accessToken);
      //   console.log("refresh token: ", refreshToken);
      // console.log("Profile: ", profile);

      try {
        // Search database to see if user exists
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          console.log(`User already exists in database`);
          // User already exists no need to save to database
          done(null, existingUser);
        } else {
          // Save new user to database
          console.log(`Save Record: ${profile.id} ${profile.displayName} ${profile.emails[0].value}`);
            
          try {
            const user = await User.create({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value
            });
            
            done(null, user);
          } catch (err) {
            console.log("error " + err);
            
          }
        }
      } catch (err) {
        console.log("bad error " + err);
      } 
    }
  )
);

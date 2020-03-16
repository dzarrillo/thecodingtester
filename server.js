const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const config = require("./config/config");

// Mongodb schema for users
require("./models/user");
// require("./models/cssExam");
// since we are not returning anything from passport we can condence it to just require.
require("./config/passport");
// Connect to mongo database
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!");
})
const app = express();
// middleware Making it available on req.body
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    cookieSession( {
        // expires in 30 days 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes")(app);
require("./routes/examRoutes")(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server is starting at ${PORT}`));

var mongoose = require("mongoose");
var { Schema } = mongoose;

var githubSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("githubexams", githubSchema);
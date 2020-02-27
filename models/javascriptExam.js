var mongoose = require("mongoose");
var { Schema } = mongoose;

var javascriptSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("javascriptexams", javascriptSchema);
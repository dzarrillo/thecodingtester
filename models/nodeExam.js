var mongoose = require("mongoose");
var { Schema } = mongoose;

var nodeSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("nodeexams", nodeSchema);
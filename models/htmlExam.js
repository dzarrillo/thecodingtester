var mongoose = require("mongoose");
var { Schema } = mongoose;

var htmlSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("htmlexams", htmlSchema);
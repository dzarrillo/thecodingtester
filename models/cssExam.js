var mongoose = require("mongoose");
var { Schema } = mongoose;

var cssSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("cssexams", cssSchema);


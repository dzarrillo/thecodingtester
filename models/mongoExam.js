var mongoose = require("mongoose");
var { Schema } = mongoose;

var mongoSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("mongoexams", mongoSchema);
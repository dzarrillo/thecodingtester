var mongoose = require("mongoose");
var { Schema } = mongoose;

var reactSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("reactexams", reactSchema);
var mongoose = require("mongoose");
var { Schema } = mongoose;

var expressSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("expressexams", expressSchema);
var mongoose = require("mongoose");
var { Schema } = mongoose;

var mysqlSchema = new Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("mysqlexams", mysqlSchema);
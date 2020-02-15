// This file needs to be placed in the client/src directory.
const proxy = require("http-proxy-middleware")
module.exports = function(app){
    app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:5001"}));
}
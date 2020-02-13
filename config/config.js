require("dotenv").config();

module.exports = {
    auth: {
        google_id: process.env.google_client_id,
        google_secret: process.env.google_client_secret
    },
    cookieKey: process.env.cookieKey,
    mongoURI: process.env.mongoURI
}
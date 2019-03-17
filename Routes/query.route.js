const query = require("../Controllers/query.controller")

module.exports = app => {
    app.post("/api/executeQuery", query.executeQuery);
}
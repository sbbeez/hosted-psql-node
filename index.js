const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));

app.use((req, res, next) => { 
    req.client = require("./Utils/dbConnection.utils").getDbConnection();
    next();
});

require("./Routes/query.route")(app);

app.listen(9999);
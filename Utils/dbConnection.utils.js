const { Pool } = require("pg");
const { connectionString } = require("../Config/keys.config")

let pool;

const getDbConnection = () => {
    if (!pool) {
        pool = new Pool({ connectionString });
    }
    return pool;
}

const executeQuery = async (query) => { 
    let client = getDbConnection();
    let result = await client.query(query);
    return result;
}

exports.getDbConnection = getDbConnection;
exports.executeQuery = executeQuery;

const mysql = require('mysql2/promise');
const config = require("../config/config.json");

async function query(sql, params) {
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      database: config.database,
      password: config.password,
    });
    const [results,] = await connection.execute(sql, params);
    console.log(results);
    return results;
  } catch (error) {
   
  }
}

module.exports = {
  query
}

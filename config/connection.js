// Set up MySQL connection.
var mysql = require("mysql");

var pool  = mysql.createPool({
    connectionLimit: 10,
    port: 3306,
    host: "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "a2refqsrcxmllsx0",
    password: "rj4bxidfcphe5x5s",
    database: "tkks00m55hwc3ush"
});

module.exports = pool;



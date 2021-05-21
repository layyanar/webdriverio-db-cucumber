const mysql = require("mysql2");
//var mysql = require('mysql');
connectToDatabase = function () {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sathya13vel",
    database: "mysql",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query(
      "SELECT * FROM user LIMIT 300 OFFSET 0",
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      }
    );
  });
};

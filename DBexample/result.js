const mysql = require("mysql2");
//var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "admin12345",
database: "javatpoint"
});
con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM employees", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


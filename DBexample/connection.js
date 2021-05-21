const mysql = require("mysql2");
// var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sathya13vel",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

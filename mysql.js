const mysql =require("mysql");

var pool =mysql.createPool({
    "user":"root",
    "password":"",
    "database":"jaldevannero_nero",
    "host":"localhost",
    "port":3306

});

exports.pool=pool;
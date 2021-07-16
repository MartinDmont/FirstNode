const sqlite3 = require('sqlite3')
sqlite3.verbose()

let db = new sqlite3.Database('./datas/salaries.db');
db.each("SELECT * FROM users", function() {
    console.log("cocuou")
})
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: process.env.PASS,
    database: 'Employee_DB',
    multipleStatements: true

});


connection.connect((err) => {
    if (err) throw err;
    console.log(`Db Connected`);
})


module.exports = connection;
const mysql = require('mysql');

const db = mysql.createConnection( {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'jasonjdhh53',
    database: 'student'
});

exports.conn = async () =>{
    db.connect();
    console.log('connected');
}

exports.db = db;





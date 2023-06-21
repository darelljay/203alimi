const mysql = require('mysql');

const db = mysql.createConnection( {
    host: 'sql12.freemysqlhosting.net',
    port: '3306',
    user: 'sql12627591',
    password: 'bzHHqkTpxI',
    database: 'sql12627591'
});

exports.conn = async () =>{
    db.connect();
    // db.query('SELECT * from student',(error,result)=>{
    //     console.log(result);
    // })
    console.log('connected');
}

exports.db = db;





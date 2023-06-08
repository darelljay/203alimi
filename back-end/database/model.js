const mysql = require('mysql');

const db = mysql.createConnection( {
    host: 'sql12.freemysqlhosting.net',
    port: '3306',
    user: 'sql12624409',
    password: 'wQ1sASLmi2',
    database: 'sql12624409'
});

exports.conn = async () =>{
    db.connect();
    // db.query('SELECT * from student',(error,result)=>{
    //     console.log(result);
    // })
    console.log('connected');
}

exports.db = db;





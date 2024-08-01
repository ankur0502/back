const mysql=require('mysql2');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ankur@123',
    database:'course_management'
});
db.connect((err)=>{
if (err) throw err;
console.log('connected to sql');
});
module.exports=db;
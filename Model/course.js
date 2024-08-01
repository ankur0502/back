const db=require("./db");
const Course={
    getAll:(callback)=>{
        const query='select *from course';
db.query(query,(err,results)=>
{
    if (err) throw err;
    callback(results);
    });

    },
    update:(cid,course,callback)=>{
        const query='update course set cname=?,fees=?,duration=? where cid=?';
       db.query(query,[course.cname,course.fees,course.duration,cid],(err,results)=>{
        if(err) throw err;
        callback(results);
       });
       },
       create:(course,callback)=>{
        const query='insert into course( cname,fees,duration) values (?,?,?)';
        db.query(query,[course.cname,course.fees,course.duration],(err,results)=>{
        if(err) throw err;
        callback(results);
        });

       },
       delete:(cid,callback)=>{
        const query='delete from course where cid=?';
        db.query(query,[cid],(err,result)=>{
         if(err) throw err;
         callback(result);

        });


       
       }
    
   
   
    };

module.exports=Course;
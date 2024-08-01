const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const courseRoutes = require('./router/courseRouter');

const app=express();


app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);

app.listen(3000,()=>{
    console.log("server is running on ${3000}");

});


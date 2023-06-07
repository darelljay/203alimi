const express = require('express');
const app = express();

const mysql = require('mysql');
const {db,conn} = require('./back-end/database/model');
const {checkUsers, login, getStudnet_info,clean_Classroom, sg, checkStudentNum} = require('./back-end/controllers/controller')
const port = 3000;
const task = require('./back-end/router/task');
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require("express-session");

// const { register_auth } = require('../203alimi/back-end/router/task');
const path = require('path');
const ejs = require('ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/task",task);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
app.use(cors());
app.use(express.static('front-end'));
app.set('view engine', 'ejs');
app.set('views', './front-end/views');

app.use(session({
    secret: 'kimdarell@1234',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
    },
    name:'connect.sid'
  }));



app.listen(process.env.port || port,()=>{
    console.log('h1');
    conn();
    getStudnet_info();

});

const auth = (req, res) => {
  return new Promise((resolve, reject) => {
    if (session && session.id) {
      resolve(200);
    } else {
      resolve(401);
    }
  })
  };
  
 
app.get('/',(req,res)=>{
  // setInterval(async ()=>{
  //     if(index===6) index = 1;
  //     let group = await clean_Classroom(index);

  //     let clean_group = {
  //       'g':group,
  //       'i':index
  //     }
      
  //     index++;
  //     console.log(index);
  //     res.render('index',{clean_group});
  //   },7000);
  res.render('index',{sg});
});

app.post('/login',async (req,res)=>{
    
      const {id,student_num,password} = req.body;
      const results = await checkStudentNum(id);

   if(await login(id,student_num,password)===400){
    return res.render('login');
   }else{
    session.id = id;
    session.student_name = results[0].student_name;
    console.log(session.id);
    const name = session.student_name;
    const work = results[0].student_work;
    const explain = results[0].explain;
    
    res.render("logedIn",{sg,name,work,explain});
    // res.send('<h1>Login secceded</h1>').status(200);
   }
    
    
}); 

app.post('/logOut',(req,res)=>{
  const name = req.body.name; 

  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
 });

 res.render("index",{sg});
});
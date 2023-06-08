const express = require('express');
const {  signUp, login, sg, clean_Classroom, checkStudentNum, deleteId } = require('../controllers/controller');
const app = express();
const router = express.Router();

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', '../../front-end/views');

router.post('/signUp',async (req,res)=>{
    console.log(req.body)
    const {name,id,password,student_num} = req.body;
    console.log(await signUp(name,id,password,student_num))

    // if(await signUp(name,id,password,student_num) === 200){
    //     res.redirect("http://localhost:3000/html/login.html")
    // }else{
    //     res.render("signup");
    // }
    
    // const results = await checkStudentNum(id);
    // console.log(results)
    // const work = results[0].student_work;
    // const explain = results[0].explain;
    // await signUp(name,id,password,student_num) === 200 ? res.render("logedin",{sg,name,work,explain}):res.render("signup");
});

module.exports = router;
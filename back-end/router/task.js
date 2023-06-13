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
    // console.log(await signUp(name,id,password,student_num))

    if(await signUp(name,id,password,student_num) === 200){
        res.redirect("https://203alimi.netlify.app/html/login.html");
    }else{
        res.rener("signup");
    }
});

module.exports = router;

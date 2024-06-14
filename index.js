import express from "express";
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { RecruiterController } from "./src/controllers/recruiter.controller.js";

const app = express();
app.use(expressEjsLayouts);
app.use(express.static(path.resolve('public')));
app.set('view engine','ejs');
app.set('views',path.resolve('src','views'));
app.use(express.urlencoded({extended: true}));

const recruiterController = new RecruiterController();

app.get('/',(req,res)=>{
    res.render('home',{errorMessage:null});
})
app.get('/jobsList',(req,res)=>{
    res.render('jobsList');
})
app.get('/job',(req,res)=>{
    res.render('job');
})

app.post('/registerRecruiter',recruiterController.registerRecruiter);
app.post('/loginRecruiter',recruiterController.loginRecruiter);

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
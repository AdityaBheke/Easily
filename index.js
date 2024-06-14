import express from "express";
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();
app.use(expressEjsLayouts);
app.use(express.static(path.resolve('public')));
app.set('view engine','ejs');
app.set('views',path.resolve('src','views'))



app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/jobsList',(req,res)=>{
    res.render('jobsList');
})
app.get('/job',(req,res)=>{
    res.render('job');
})


app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
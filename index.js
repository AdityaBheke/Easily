import express from "express";
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { RecruiterController } from "./src/controllers/recruiter.controller.js";
import { JobController } from "./src/controllers/jobs.controller.js";
import fileUpload from './src/middlewares/upload.file.middleware.js';
import { validateRegister, validateCreateJob, validateUpdateJob, validateApplicant } from "./src/middlewares/validation.middleware.js";
import session from "express-session";

const app = express();
app.use(expressEjsLayouts);
app.use(express.static(path.resolve('public')));
app.set('view engine','ejs');
app.set('views',path.resolve('src','views'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret:'secret key',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}
}))

const recruiterController = new RecruiterController();
const jobController = new JobController();

app.get('/',(req,res)=>{
    res.render('home',{status:null, registerErrorMsg:null, loginErrorMsg:null});
})
app.get('/jobs',jobController.getJobs);
app.get('/jobs/:id',jobController.getJobDetails);
app.get('/createjob',jobController.getCreateJobView);
app.post('/jobs', validateCreateJob, jobController.createJob);
app.get('/updatejob/:id',jobController.getupdateJobView);
app.post('/updatejob/:id', validateUpdateJob, jobController.updateJob);
app.post('/deletejob/:id',jobController.deleteJob);
app.get('/jobs/:id/applicants',jobController.getApplicants);

app.post('/apply/:id', fileUpload.single('resume'), validateApplicant, jobController.apply);

app.post('/registerRecruiter', validateRegister, recruiterController.registerRecruiter);
app.post('/loginRecruiter',recruiterController.loginRecruiter);

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
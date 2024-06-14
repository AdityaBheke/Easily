import { JobModel } from "../models/jobs.model.js";

export class JobController{
    createJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, applicants} = req.body;
        const job = new JobModel(designation, company, location, salary, lastDate, postDate, skills, applicants);
        JobModel.addJob(job);
        res.redirect('/jobs');
    }
    getJobs(req,res){
        res.render('jobsList',{jobsList: JobModel.getAllJobs()});
    }
    getJobDetails(req, res){
        const job = JobModel.getJobById(req.params.id);
        res.render('job',{job:job});
    }
}
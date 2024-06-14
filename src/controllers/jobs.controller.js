import { JobModel } from "../models/jobs.model.js";

export class JobController{
    getCreateJobView(req,res){
        res.render('createJob');
    }
    createJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, openings} = req.body;
        const job = new JobModel(designation, category, company, location, salary, lastDate, postDate, skills, openings);
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
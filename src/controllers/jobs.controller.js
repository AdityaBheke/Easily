import { JobModel } from "../models/jobs.model.js";

export class JobController{
    getCreateJobView(req,res){
        res.render('createJob');
    }
    getupdateJobView(req,res){
        const job = JobModel.getJobById(req.params.id);
        res.render('updateJob',{job:job});
    }
    createJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, openings} = req.body;
        const skillsArray = [];
        if (Array.isArray(skills)) {
           skillsArray.push(...skills);
        }else{
           skillsArray.push(skills);
        }
        const job = new JobModel(designation, category, company, location, salary, lastDate, postDate, skillsArray, openings);
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
    updateJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, openings} = req.body;
        const skillsArray = [];
        if (Array.isArray(skills)) {
           skillsArray.push(...skills);
        }else{
           skillsArray.push(skills);
        }
        const job = new JobModel(designation, category, company, location, salary, lastDate, postDate, skillsArray, openings);
        job.id = req.params.id;
        JobModel.updateJob(job);
        res.redirect(`/jobs/${req.params.id}`);
    }
    deleteJob(req,res){
        JobModel.deleteJob(req.params.id);
        res.redirect('/jobs');
    }
}
import { ApplicantModel } from "../models/applicant.model.js";
import { JobModel } from "../models/jobs.model.js";

export class JobController{
    getCreateJobView(req,res){
        res.render('createJob',{errorMessages:null, recruiter:req.session.recruiter});
    }
    getupdateJobView(req,res){
        const job = JobModel.getJobById(req.params.id);
        res.render('updateJob',{job:job, errorMessages:null, recruiter:req.session.recruiter});
    }
    createJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, openings} = req.body;
        const job = new JobModel(designation, category, company, location, salary, lastDate, postDate, skills, openings);
        JobModel.addJob(job);
        res.redirect('/jobs');
    }
    getJobs(req,res){
        res.render('jobsList',{jobsList: JobModel.getAllJobs(), recruiter:req.session.recruiter});
    }
    getJobDetails(req, res){
        const job = JobModel.getJobById(req.params.id);
        res.render('job',{job:job, errorMessages:null, recruiter:req.session.recruiter});
    }
    updateJob(req,res){
        const {designation, category, company, location, salary, lastDate, postDate, skills, openings} = req.body;
        const job = new JobModel(designation, category, company, location, salary, lastDate, postDate, skills, openings);
        job.id = req.params.id;
        const oldJob = JobModel.getJobById(req.params.id);
        job.applicants = oldJob.applicants;
        JobModel.updateJob(job);
        res.redirect(`/jobs/${req.params.id}`);
    }
    deleteJob(req,res){
        JobModel.deleteJob(req.params.id);
        res.redirect('/jobs');
    }
    apply(req,res){
        const {name,email,mobile,resume} = req.body;
        const { filename } = req.file;
        const applicant = new ApplicantModel(name,email,mobile,filename);
        const job = JobModel.getJobById(req.params.id);
        ApplicantModel.addApplicant(applicant);
        job.applicants.push(applicant);
        JobModel.updateJob(job);
        res.redirect(`/jobs/${req.params.id}`);
    }
    getApplicants(req,res){
        const job = JobModel.getJobById(req.params.id);
        res.render('applicants',{job:job, recruiter:req.session.recruiter});
    }
}
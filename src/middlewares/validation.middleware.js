import { body, validationResult } from "express-validator";
import { JobModel } from "../models/jobs.model.js";

export async function validateRegister(req, res, next) {
    const rules = [
        body('name').notEmpty().withMessage('Name should not be Empty.'),
        body('email').isEmail().withMessage('Enter valid email'),
        body('password').notEmpty().withMessage('Enter strong password')
    ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.render('home',{status:'goToRegister', registerErrorMsg:result.array(), loginErrorMsg:null, recruiter:req.session.recruiter});
    }else{
        next();
    }
}

export async function validateCreateJob(req, res, next) {
    const rules = [
        body('company').notEmpty().withMessage('Company Name should not be Empty.'),
        body('designation').notEmpty().withMessage('Please select Designation form dropdown.'),
        body('category').notEmpty().withMessage('Please select Category form dropdown.'),
        body('location').notEmpty().withMessage('Location should not be Empty.'),
        body('salary').isInt({ min: 1 }).withMessage('Salary should be a positive number.'),
        body('openings').isInt({ min: 1 }).withMessage('Openings should be a positive number.'),
        body('lastDate').isDate().withMessage('Please select Last date to apply.'),
        body('skills').notEmpty().withMessage('Please select Skills form dropdown.'),
       ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.render('createJob',{errorMessages:result.array(), recruiter:req.session.recruiter});
    }else{
        next();
    }
}
export async function validateUpdateJob(req, res, next) {
    const rules = [
        body('company').notEmpty().withMessage('Company Name should not be Empty.'),
        body('designation').notEmpty().withMessage('Please select Designation form dropdown.'),
        body('category').notEmpty().withMessage('Please select Category form dropdown.'),
        body('location').notEmpty().withMessage('Location should not be Empty.'),
        body('salary').isInt({ min: 1 }).withMessage('Salary should be a positive number.'),
        body('openings').isInt({ min: 1 }).withMessage('Openings should be a positive number.'),
        body('lastDate').isDate().withMessage('Please select Last date to apply.'),
        body('skills').notEmpty().withMessage('Please select Skills form dropdown.'),
       ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.render('updateJob',{errorMessages:result.array(),job:req.body, recruiter:req.session.recruiter});
    }else{
        next();
    }
}

export async function validateApplicant(req, res, next) {
    const rules = [
        body('name').notEmpty().withMessage('Name should not be Empty.'),
        body('email').isEmail().withMessage('Email should not be Empty.'),
        body('mobile').isMobilePhone().withMessage('Contact number should not be Empty.'),
        body('resume').custom((value,{req})=>{
            if (!req.file) {
              throw new Error('Resume is required');
            } else {
              return true;
            }
          })
       ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const job = JobModel.getJobById(req.params.id);
        res.render('job',{job:job, errorMessages:result.array(), recruiter:req.session.recruiter});
    }else{
        next();
    }
}

export async function validateSearchQuery(req, res, next) {
    const rules = [
        body('search').notEmpty().withMessage('search text should not be Empty.')
       ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const job = JobModel.getJobById(req.params.id);
        res.redirect('/jobs');
    }else{
        next();
    }
}
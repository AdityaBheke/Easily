import { RecruiterModel } from '../models/recruiter.model.js'


export class RecruiterController{
    
    registerRecruiter(req,res){
        const {name, email, password} = req.body;
        const recruiter = new RecruiterModel(name, email, password);
        RecruiterModel.addRecruiter(recruiter);
        res.render('home',{status:'goToLogin',errorMessage:null});
    }
    loginRecruiter(req,res){
        const {email, password} = req.body;
        const auth = RecruiterModel.authenticateRecruiter(email, password);
        if (auth) {
            res.redirect('/jobs');
        }else{
            res.render('home',{status:'goToLogin',errorMessages:['Invalid Credentials']})
        }
    }
}
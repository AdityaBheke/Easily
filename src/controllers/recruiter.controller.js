import { RecruiterModel } from '../models/recruiter.model.js'


export class RecruiterController{
    
    registerRecruiter(req,res){
        const {name, email, password} = req.body;
        const recruiter = new RecruiterModel(name, email, password);
        RecruiterModel.addRecruiter(recruiter);
        res.render('home',{status:'goToLogin', registerErrorMsg:null, loginErrorMsg:null, recruiter:req.session.recruiter});
    }
    loginRecruiter(req,res){
        const {email, password} = req.body;
        const auth = RecruiterModel.authenticateRecruiter(email, password);
        if (auth) {
            req.session.recruiter = auth;
            res.redirect('/jobs');
        }else{
            res.render('home',{status:'goToLogin', registerErrorMsg:null, loginErrorMsg:[{msg:'Invalid Credentials'}], recruiter:req.session.recruiter})
        }
    }
    logout(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}
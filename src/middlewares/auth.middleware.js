export const authenticateRecruiter = (req,res,next)=>{
    if (req.session.recruiter) {
        next();
    } else {
        res.render('home',{status:'goToLogin', registerErrorMsg:null, loginErrorMsg:[{msg:'You need to login as a recruiter to access this feature'}], recruiter:req.session.recruiter});
    }
}
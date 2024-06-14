
export class RecruiterModel{
    constructor(name, email, password){
        this.id = getNextId();
        this.name =  name;
        this.email = email;
        this.password = password;
    }
    static addRecruiter(recruiter){
        recruiters.push(recruiter);
        console.log("Recruiter added");
    }
    static authenticateRecruiter(email, password){
        const reqReqruiter = recruiters.find((recruiter)=>{return recruiter.email==email&&recruiter.password==password});
        if (reqReqruiter) {
            return true;
        } else {
            return false;
        }
    }

}
function getNextId() {
    if (recruiters.length>0) {
        return recruiters[recruiters.length-1].id + 1;
    } else {
        return 1;
    }
}
const recruiters = [
    {
        id: 1,
        name: 'Aditya',
        email: 'ad03@gmail.com',
        password: 'Aditya'
    }] 
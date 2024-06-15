
export class ApplicantModel{
    constructor(name,email,mobile,resume){
        this.id = getNextId();
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.resume = resume;
    }
    static addApplicant(applicant){
        applicants.push(applicant);
    }
}

function getNextId() {
    if (applicants.length>0) {
        return applicants[applicants.length-1].id + 1;
    } else {
        return 1;
    }
}

const applicants = [];
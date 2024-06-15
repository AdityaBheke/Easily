
export class ApplicantModel{
    constructor(name,email,mobile,resume){
        this.id = 1;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.resume = resume;
    }
}

const applicants = [
    {
        id: 1,
        name: 'Aditya',
        email: 'ad03@gmail.com',
        mobile: '9876543210',
        resume: ''
    },
    {
        id: 2,
        name: 'Sourav',
        email: 'sourav@gmail.com',
        mobile: '9976543210',
        resume: ''
    }
]
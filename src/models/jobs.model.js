
export class JobModel{
    constructor(designation, category, company, location, salary, lastDate, postDate, skills, openings, applicants){
        this.id = getNextId();
        this.designation = designation;
        this.category = category;
        this.company = company;
        this.location = location;
        this.salary = salary;
        this.lastDate = lastDate;
        this.postDate = postDate;
        this.skills = skills;
        this.openings = openings;
        this.applicants = applicants;
    }
    static addJob(job){
        jobs.push(job);
        console.log('Job Created');
    }
    static getAllJobs(){
        return jobs;
    }
    static getJobById(id){
        return jobs.find((job)=>{return job.id == id});
    }
}

function getNextId() {
    if (jobs.length>0) {
        return jobs[jobs.length-1].id + 1;
    } else {
        return 1;
    }
}
const jobs = [
    {
        id: 1,
        designation: 'SDE',
        category: 'Tech',
        company: 'Coding Ninjas',
        location: 'Delhi',
        salary: '900000',
        lastDate: '12-06-2024',
        postDate: '09-06-2024',
        skills: ['ReactJS','NodeJS','Html','JS','CSS'],
        openings: 3,
        applicants: [1,2,3]
    },
    {
        id: 2,
        designation: 'HR',
        category: 'Non Tech',
        company: 'Capgemini',
        location: 'Pune',
        salary: '800000',
        lastDate: '14-06-2024',
        postDate: '06-06-2024',
        skills: ['ReactJS','NodeJS','Html','JS','CSS'],
        openings: 5,
        applicants: [1,2,3]
    }
]
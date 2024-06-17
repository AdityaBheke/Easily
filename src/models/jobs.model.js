
export class JobModel{
    constructor(designation, category, company, location, salary, lastDate, postDate, skills, openings){
        this.id = getNextId();
        this.designation = designation;
        this.category = category;
        this.company = company;
        this.location = location;
        this.salary = salary;
        this.lastDate = getDateString(new Date(lastDate));
        this.postDate = getDateString(new Date());
        this.skills = new Array().concat(skills);
        this.openings = openings;
        this.applicants = [];
    }
    static addJob(job){
        jobs.push(job);
        console.log('Job Added',job.id);
    }
    static getAllJobs(){
        console.log('All jobs fetched');
        return jobs;
    }
    static getJobById(id){
        console.log('Job with id '+id+' is fetched');
        return jobs.find((job)=>{return job.id == id});
    }
    static updateJob(updatedJob){
        const index = jobs.findIndex((job)=>{return job.id == updatedJob.id});
        jobs[index] = updatedJob;
        console.log('Updated Job',jobs[index]);
    }
    static deleteJob(id){
        const index = jobs.findIndex((job)=>{return job.id == id});
        jobs.splice(index,1);
        console.log('Job deleted',jobs);
    }
    static searchJobByName(searchQuery){
        const result = jobs.filter((job)=> compareStrings(job.designation,searchQuery) || compareStrings(job.company,searchQuery));
        if (result.length>0) {
            return result;
        } else {
            return null;
        }
    }
}

function compareStrings(availableName, searchedName) {
    const jobName = (availableName.trim()).toLowerCase();
    const searchQuery = (searchedName.trim()).toLowerCase();
    if(jobName.search(searchQuery)<0){
        return false;
    }else{
        return true;
    }
}

function getDateString(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
function getNextId() {
    if (jobs.length>0) {
        return jobs[jobs.length-1].id + 1;
    } else {
        return 1;
    }
}
let jobs = [
    {
        id: 1,
        designation: 'SDE',
        category: 'Tech',
        company: 'Coding Ninjas',
        location: 'Delhi',
        salary: '900000',
        lastDate: '12 July 2024',
        postDate: '09 July 2024',
        skills: ['ReactJs','NodeJs','MongoDB','Html'],
        openings: 3,
        applicants: []
    },
    {
        id: 2,
        designation: 'HR',
        category: 'Non Tech',
        company: 'Capgemini',
        location: 'Pune',
        salary: '800000',
        lastDate: '14 June 2024',
        postDate: '06 June 2024',
        skills: ['ReactJs','NodeJs','MongoDB'],
        openings: 5,
        applicants: []
    }
]


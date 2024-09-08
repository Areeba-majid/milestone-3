
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-content") as HTMLDivElement;


interface ResumeData {
    name: string;
    email: string;
    degree: string;
    institution: string;
    year: string;
    jobTitle: string;
    company: string;
    workYears: string;
    skills: string[];
}

function generateResume(data: ResumeData) {
    resumeOutput.innerHTML = `
        <h3>${data.name}</h3>
        <p>Email: ${data.email}</p>
        <h4>Education</h4>
        <p>${data.degree} from ${data.institution}, Class of ${data.year}</p>
        <h4>Work Experience</h4>
        <p>${data.jobTitle} at ${data.company}, ${data.workYears} years</p>
        <h4>Skills</h4>
        <p>${data.skills.join(', ')}</p>
    `;
}


resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();  

    const formData = new FormData(resumeForm);

    const resumeData: ResumeData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        degree: formData.get("degree") as string,
        institution: formData.get("institution") as string,
        year: formData.get("year") as string,
        jobTitle: formData.get("jobTitle") as string,
        company: formData.get("company") as string,
        workYears: formData.get("workYears") as string,
        skills: (formData.get("skills") as string).split(",").map(skill => skill.trim())
    };

    generateResume(resumeData);  
});

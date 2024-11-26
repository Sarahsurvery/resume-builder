// import { form } from "motion/react-client";
import { useState } from "react";
import Animation from '@/app/components/Animation';
import GenerateResume from '@/app/components/GenerateResume';


const ResumeForm = ({onSubmit} ) => {
    const[FormData, setFormData] = useState({
        name: '',
        email: '',
        education: '',
        skills: '',
        experience: '',
    });

    const [resumeGenerated, setResumeGenerated] =useState(false)

        const handleChange = (e) => {
        const { name, value } =
        e.target;
        setFormData ((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResumeGenerated(true);
        onSubmit(FormData);
    };

    // const onSubmit = (data) => {
    // console.log('Form submitted with data:', data);
    // };

    // const handleGenerateResume = () => {
    //     // const doc = new jsPDF();
    //     // Call the function to generate the resume
    //     generateResume(formData);
    //   };
    const renderResume = () => {
    return (
        <div className="resume">
          <h2> "My Resume" </h2>
          <p><strong>Name:</strong> {FormData.name}</p>
          <p><strong>Email:</strong> {FormData.email}</p>
          <p><strong>Skills:</strong> {FormData.skills}</p>
          <p><strong>Experience:</strong> {FormData.experience}</p>
        </div>
      );
    };
    return(
        <div>
        <form onSubmit={handleSubmit}>
            {/* <div> */}
            
        <Animation delay= {0.2}>
        <div className="form-group mx-6">
        <label htmlFor="name"> Name:       </label>
            <input
        type= 'text'
        name= 'name'
        value= {FormData.name}
        onChange={handleChange}
        placeholder="Name:"
        />
        </div>
        </Animation>
        {/* </div> */}
        {/* <div> */}
        
        <Animation delay = {0.4}>
        <div className="form-group mx-6">
        <label htmlFor="email"> Email:   </label>
        <input 
        type= 'email'
        name= 'email'
        value= {FormData.email}
        onChange={handleChange}
        placeholder="Email:"
        />
        </div>
        {/* </div> */}
        </Animation>
        
        <Animation delay = {0.6}>
        <div className="form-group mx-6">
        <label htmlFor="education"> Education:   </label>
        <input
        type= 'text'
        name= 'education'
        value= {FormData.education}
        onChange={handleChange}
        placeholder="Education:"
        />
        </div>
        </Animation>
        {/* <div> */}
        <Animation delay = {0.8}>
        <div className="form-group mx-6">
        <label htmlFor="skills"> Skills:   </label>
        <textarea 
        name= 'skills'
        value= {FormData.skills}
        onChange={handleChange}
        placeholder="Skills:"
        />
        </div>
        </Animation>
        {/* <div> */}
        <Animation delay = {0.8}>
        <div className="form-group mx-6">
        <label htmlFor="experience">Experience:   </label>
        <textarea
        name= 'experience'
        value= {FormData.experience}
        onChange={handleChange}
        placeholder="Work Experience:"
        />
        </div>
        </Animation>
        
        <button type="submit">Generate Resume</button>
         
        {resumeGenerated && renderResume()} 
         <section id="ResumeForm">
            {/* <h2>Your Resume</h2> */}
            <div id="ResumeContent"></div>
            
        </section>
        </form>
    
     
        </div>
    ); 
    
}


export default ResumeForm;
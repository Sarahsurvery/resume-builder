"use client";


import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
// import ResumeContent from "./components/ResumeContent";

// import { data } from "motion/react-client";
// import { form } from "motion/react-m";

export default function Home () {

  // const ParentComponent = () =>{
  const [ FormData, setResumeData] = useState(null);
  const handleFormSubmit = (FormData:any) => {
    console.log('FormData received in parent:' ,FormData)
    setResumeData(FormData);
  };
  return(
    <div>
      <h1>Resume Builder</h1>
      
        <ResumeForm onSubmit={handleFormSubmit} />
         
      </div>
  );
}
     


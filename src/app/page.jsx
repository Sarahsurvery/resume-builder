"use client";
import { useState } from "react";
import ResumeForm from "@/app/components/ResumeForm";
// import GenerateResume from "@/app/components/GenerateResume";

export default function Home () {


  const [ FormData, setResumeData] = useState(null);
  const handleFormSubmit = (data) => {
    console.log('FormData received in parent:' ,FormData)
    setResumeData(data);
  };
    return(
      <div>
      <h1>Resume Builder</h1>
      
        <ResumeForm onSubmit={handleFormSubmit} />
         
      </div>
  );
}
     


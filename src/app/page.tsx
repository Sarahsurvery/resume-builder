"use client";
import { useState } from "react";
import ResumeForm from "@/app/components/ResumeForm";

export default function Home () {


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
     


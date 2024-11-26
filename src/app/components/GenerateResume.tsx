import { jsPDF } from 'jspdf';

const generateResume = (formData: { name: any; email: any; education: any; skills: any; experience: any; }) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Resume", 20, 20);

  // Add Name
  doc.setFontSize(12);
  doc.text(`Name: ${formData.name}`, 20, 30);

  // Add Email
  doc.text(`Email: ${formData.email}`, 20, 40);

  // Add Education
  doc.text(`Education: ${formData.education}`, 20, 50);

  // Add Skills
  doc.text(`Skills: ${formData.skills}`, 20, 60);

  // Add Work Experience
  doc.text(`Work Experience: ${formData.experience}`, 20, 70);

  // Save the document
  doc.save(`${formData.name}_resume.pdf`);
};

export default generateResume;

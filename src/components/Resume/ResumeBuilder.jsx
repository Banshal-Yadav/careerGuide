import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Mail, Phone, Linkedin, Github, User, Star, Wrench, BookOpen,
    Briefcase as BriefcaseIcon, Share2, Download, Edit, ArrowLeft
} from 'lucide-react';
import './ResumeBuilder.css';
import { useAuth } from '../../hooks/useAuth';
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { dummyResumes } from '../../data/dummyResumeData';

const ResumePreview = ({ data }) => {
    const descriptionToList = (desc) => desc ? desc.split('\n').filter(line => line.trim() !== '') : [];
    const hasWorkExperience = data.experience && data.experience.some(exp => exp.jobTitle && exp.jobTitle.trim() !== '');

    return (
        <div id="resume-to-download">
            <div className="resume-preview-container">
                <div className="resume-main-content">
                    <header className="resume-header">
                        <h1>{data.fullName}</h1>
                    </header>
                    <section className="resume-section resume-summary">
                        <h2 className="resume-section-title"><User size={18} /> Resume Summary</h2>
                        <p>{data.summary}</p>
                    </section>
                    {hasWorkExperience && (
                        <section className="resume-section">
                            <h2 className="resume-section-title"><BriefcaseIcon size={18} /> Work Experience</h2>
                            {data.experience.map((exp, i) => (
                                exp.jobTitle && (
                                    <div key={i} className="job">
                                        <p className="job-title">{exp.jobTitle}</p>
                                        <p className="company">{exp.company}</p>
                                        <p className="job-date">{exp.startDate} - {exp.endDate}</p>
                                        <ul className="job-description">{descriptionToList(exp.description).map((item, j) => <li key={j}>{item}</li>)}</ul>
                                    </div>
                                )
                            ))}
                        </section>
                    )}
                     <section className="resume-section">
                        <h2 className="resume-section-title"><Wrench size={18} /> Projects</h2>
                        {data.projects.map((proj, i) => (
                            <div key={i} className="project">
                                <p className="project-title">{proj.title}</p>
                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">{proj.link}</a>
                                <ul className="project-description">{descriptionToList(proj.description).map((item, j) => <li key={j}>{item}</li>)}</ul>
                            </div>
                        ))}
                    </section>
                </div>
                <aside className="resume-sidebar">
                    <section className="resume-section">
                        <h2 className="resume-section-title">Contact</h2>
                        <div className="contact-item"><Mail size={14} /><span>{data.email}</span></div>
                        <div className="contact-item"><Phone size={14} /><span>{data.phoneNumber}</span></div>
                        <div className="contact-item"><Linkedin size={14} /><span>{data.linkedin}</span></div>
                        <div className="contact-item"><Github size={14} /><span>{data.github}</span></div>
                    </section>
                    <section className="resume-section">
                        <h2 className="resume-section-title"><BookOpen size={18} /> Education</h2>
                        {data.education.map((edu, i) => (
                            <div key={i} className="school">
                                <p className="degree">{edu.degree}</p>
                                <p className="university">{edu.university}</p>
                                <p className="grad-year">{edu.gradYear}</p>
                            </div>
                        ))}
                    </section>
                    <section className="resume-section">
                        <h2 className="resume-section-title"><Star size={18} /> Skills</h2>
                         <div className="skill-chips">{data.skills.split(',').map((skill, i) => <span key={i} className="skill-chip">{skill.trim()}</span>)}</div>
                    </section>
                </aside>
            </div>
        </div>
    );
};

const ResumeBuilder = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); 
  
  const resumeIdToEdit = location.state?.resumeId;
  const isNewResume = location.state?.isNew;
  const isPreviewMode = location.state?.isPreview;

  const [formData, setFormData] = useState({
    fullName: '', email: '', phoneNumber: '', linkedin: '', github: '', summary: '',
    experience: [{ jobTitle: '', company: '', startDate: '', endDate: '', description: '' }],
    education: [{ degree: '', university: '', gradYear: '' }],
    projects: [{ title: '', description: '', link: '' }],
    skills: ''
  });
  
  const [resumeData, setResumeData] = useState(null); 
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  
  useEffect(() => {
    if (user && resumeIdToEdit) {
        const fetchResumeData = async () => {
            const profileRef = doc(db, 'profiles', user.uid);
            const docSnap = await getDoc(profileRef);
            if (docSnap.exists() && docSnap.data().resumes) {
                const existingResume = docSnap.data().resumes.find(r => r.id === resumeIdToEdit);
                if (existingResume) {
                    if (isPreviewMode) {
                        setResumeData(existingResume);
                    } else {
                        setFormData(existingResume);
                    }
                }
            }
        };
        fetchResumeData();
    }
  }, [user, resumeIdToEdit, isPreviewMode]);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    let loadedCount = 0;
    const checkAllLoaded = () => { if (++loadedCount === 2) setScriptsLoaded(true); };
    script1.onload = checkAllLoaded;
    script2.onload = checkAllLoaded;
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
    };
  }, []);

  const handleDownloadPDF = () => {
    if (!scriptsLoaded) {
        setFeedbackMessage("pdf generator is loading, please wait");
        setTimeout(() => setFeedbackMessage(''), 3000);
        return;
    }
    const { jsPDF } = window.jspdf;
    const resumeElement = document.getElementById('resume-to-download');
    resumeElement.style.transform = 'scale(1)';
    window.html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, height);
        pdf.save(`Resume-${formData.fullName || resumeData.fullName}.pdf`);
        resumeElement.style.transform = '';
    });
  };
  
  const handleShare = () => {
     const textArea = document.createElement("textarea");
    textArea.value = window.location.href;
    textArea.style.position = "fixed"; 
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        setFeedbackMessage('resume link copied to clipboard');
    } catch (err) {
        setFeedbackMessage('failed to copy link');
    }
    document.body.removeChild(textArea);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    const newData = { ...formData };
    if (section) {
      newData[section][index][name] = value;
    } else {
      newData[name] = value;
    }
    setFormData(newData);
  };

  const addSection = (section) => {
    const newData = { ...formData };
    if (section === 'experience') {
      newData.experience.push({ jobTitle: '', company: '', startDate: '', endDate: '', description: '' });
    } else if (section === 'education') {
      newData.education.push({ degree: '', university: '', gradYear: '' });
    } else if (section === 'projects') {
      newData.projects.push({ title: '', description: '', link: '' });
    }
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    const profileRef = doc(db, 'profiles', user.uid);
    const newResumeData = {
        ...formData,
        lastUpdated: new Date().toISOString(),
    };

    try {
        const docSnap = await getDoc(profileRef);
        if (!docSnap.exists() || !docSnap.data().resumes) {
            await setDoc(profileRef, { resumes: [] }, { merge: true });
        }

        if (isNewResume) {
            newResumeData.id = `resume_${new Date().getTime()}`;
            await updateDoc(profileRef, {
                resumes: arrayUnion(newResumeData)
            });
        } else if (resumeIdToEdit) {
            const currentResumes = docSnap.data()?.resumes || [];
            const updatedResumes = currentResumes.map(r => 
                r.id === resumeIdToEdit ? { ...newResumeData, id: resumeIdToEdit } : r
            );
            await updateDoc(profileRef, { resumes: updatedResumes });
        }
        setResumeData(newResumeData);
    } catch (error) {
        console.error("error saving resume to firestore:", error);
    }
  };
  
  // loads a dummy profile for testing based on the dropdown selection
  const handleFillDummyData = (e) => {
      const selectedIndex = e.target.value;
      if (selectedIndex === "") return; 

      const selectedResume = dummyResumes[selectedIndex];
      const { id, lastUpdated, ...formDataToSet } = selectedResume;
      setFormData(formDataToSet);
      setFeedbackMessage(`${selectedResume.fullName}'s data has been loaded`);
      setTimeout(() => setFeedbackMessage(''), 3000);
      e.target.value = ""; 
  };
  
  if(resumeData) {
      return (
         <div className="resume-builder-container">
            <div className="resume-header-actions no-print">
                <button onClick={() => navigate('/profile')} className="back-btn">
                    <ArrowLeft size={16}/> Back to Profile
                </button>
                <h2 className="resume-builder-title">Your Resume Preview</h2>
            </div>
             <div className="resume-preview-wrapper">
                <ResumePreview data={resumeData} />
            </div>
             <div className="resume-actions no-print">
                 {!isPreviewMode && (
                    <button onClick={() => setResumeData(null)} className="edit-btn"><Edit size={16}/> Go Back & Edit</button>
                 )}
                 <button onClick={handleDownloadPDF} className="download-btn" disabled={!scriptsLoaded}><Download size={16}/> {scriptsLoaded ? 'Download PDF' : 'Loading'}</button>
                 <button onClick={handleShare} className="share-btn"><Share2 size={16}/> Share Resume</button>
            </div>
             {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
         </div>
      )
  }

  return (
    <div className="resume-builder-container">
      <div className="resume-header-actions">
        <button onClick={() => navigate('/profile')} className="back-btn">
            <ArrowLeft size={16}/> Back to Profile
        </button>
        <h2 className="resume-builder-title">{isNewResume ? "Create a New Resume" : "Edit Your Resume"}</h2>
      </div>

      <div className="dummy-data-controls">
        <label htmlFor="dummy-data-select">for testing, load a profile:</label>
        <select id="dummy-data-select" onChange={handleFillDummyData} className="dummy-data-select">
            <option value="">-- select a profile --</option>
            <option value="0">cs student (priya sharma)</option>
            <option value="1">commerce student (rohan mehta)</option>
            <option value="2">arts student (ananya iyer)</option>
        </select>
      </div>
      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}

      <form onSubmit={handleSubmit} className="resume-form">
        <div className="form-section">
          <h3>Personal Details</h3>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={(e) => handleChange(e)} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => handleChange(e)} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={(e) => handleChange(e)} required />
          <input type="text" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={(e) => handleChange(e)} required />
          <input type="text" name="github" placeholder="GitHub URL" value={formData.github} onChange={(e) => handleChange(e)} required />
        </div>
        <div className="form-section">
          <h3>Resume Summary</h3>
          <textarea name="summary" placeholder="A brief summary about your professional background" value={formData.summary} onChange={(e) => handleChange(e)} rows="4" required></textarea>
        </div>
        <div className="form-section">
          <h3>Skills</h3>
          <input type="text" name="skills" placeholder="Comma-separated skills, e.g, JavaScript, React, Teamwork" value={formData.skills} onChange={(e) => handleChange(e)} required/>
        </div>
        <div className="form-section">
          <h3>Work Experience (Optional)</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="form-subsection">
              <input type="text" name="jobTitle" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleChange(e, 'experience', index)} />
              <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleChange(e, 'experience', index)} />
               <div className="date-inputs">
                <input type="text" name="startDate" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleChange(e, 'experience', index)} />
                <input type="text" name="endDate" placeholder="End Date" value={exp.endDate} onChange={(e) => handleChange(e, 'experience', index)} />
              </div>
              <textarea name="description" placeholder="Responsibilities and achievements (one per line)" value={exp.description} onChange={(e) => handleChange(e, 'experience', index)} rows="4"></textarea>
            </div>
          ))}
          <button type="button" onClick={() => addSection('experience')} className="add-section-btn">Add Experience</button>
        </div>
        <div className="form-section">
          <h3>Projects</h3>
          {formData.projects.map((proj, index) => (
            <div key={index} className="form-subsection">
              <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleChange(e, 'projects', index)} required />
              <input type="text" name="link" placeholder="Project Link (e.g, GitHub)" value={proj.link} onChange={(e) => handleChange(e, 'projects', index)} required />
              <textarea name="description" placeholder="Project description (one point per line)" value={proj.description} onChange={(e) => handleChange(e, 'projects', index)} rows="3" required></textarea>
            </div>
          ))}
          <button type="button" onClick={() => addSection('projects')} className="add-section-btn">Add Project</button>
        </div>
        <div className="form-section">
          <h3>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="form-subsection">
              <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, 'education', index)} required />
              <input type="text" name="university" placeholder="University" value={edu.university} onChange={(e) => handleChange(e, 'education', index)} required />
              <input type="text" name="gradYear" placeholder="Date Range" value={edu.gradYear} onChange={(e) => handleChange(e, 'education', index)} required />
            </div>
          ))}
          <button type="button" onClick={() => addSection('education')} className="add-section-btn">Add Education</button>
        </div>
        <button type="submit" className="submit-resume-btn">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
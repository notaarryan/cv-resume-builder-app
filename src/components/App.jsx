import { useState } from "react";
import "../styles/App.css";
import PersonalInfo from "../data/personal";
import PersonalInfoBuilder from "./Builder/PersonalInfoBuilder";
import PersonalInfoPreview from "./Preview/PersonalInfoPreview";
import EducationInfoBuilder from "./Builder/EducationInfoBuilder";
import EducationalInfoPreview from "./Preview/EducationalInfoPreview";
import ProjectsInfoBuilder from "./Builder/ProjectsInfoBuilder";
import ProjectsInfoPreview from "./Preview/ProjectsInfoPreview";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(PersonalInfo);
  return (
    <div className="container">
      <div className="resume-builder">
        <PersonalInfoBuilder
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationInfoBuilder
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <ProjectsInfoBuilder
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </div>
      <div className="resume-preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationalInfoPreview personalInfo={personalInfo} />
        <ProjectsInfoPreview personalInfo={personalInfo} />
      </div>
    </div>
  );
}

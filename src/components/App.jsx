import { useState } from "react";
import "../styles/App.css";
import PersonalInfo from "../data/personal";
import PersonalInfoBuilder from "./Builder/PersonalInfoBuilder";
import PersonalInfoPreview from "./Preview/PersonalInfoPreview";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(PersonalInfo);
  return (
    <div className="container">
      <div className="resume-builder">
        <PersonalInfoBuilder
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </div>
      <div className="resume-preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
      </div>
    </div>
  );
}

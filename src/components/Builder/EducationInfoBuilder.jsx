import { useState } from "react";
import "../../styles/EducationInfoBuilder.css";

export default function EducationInfoBuilder({
  personalInfo,
  setPersonalInfo,
}) {
  const [education, setEducation] = useState(personalInfo.education);

  const handleEducationChange = (e, index, field) => {
    const newEducationalInfo = [...education];

    if (field in newEducationalInfo[index].value) {
      newEducationalInfo[index] = {
        ...newEducationalInfo[index],
        value: {
          ...newEducationalInfo[index].value,
          [field]: e.target.value,
        },
      };
    } else {
      newEducationalInfo[index] = {
        ...newEducationalInfo[index],
        [field]: e.target.value,
      };
    }

    setEducation(newEducationalInfo);
    setPersonalInfo({ ...personalInfo, education: newEducationalInfo });
  };

  const handleAddEducationClick = () => {
    const newEducationalInfo = [
      ...education,
      {
        id: "",
        value: {
          name: "",
          location: "",
          degreeStart: "",
          degreeEnd: "",
          course: "",
        },
      },
    ];
    setEducation(newEducationalInfo);
    setPersonalInfo({ ...personalInfo, education: newEducationalInfo });
  };

  return (
    <form>
      {education.map((level, index) => {
        return (
          <div id={`level.key${index}`} key={`level.key${index}`}>
            <div>
              <label htmlFor="education-level">
                Enter level of Education:{" "}
              </label>
              <select
                name="education-levels"
                id="education-levels"
                value={level.id}
                onChange={(e) => handleEducationChange(e, index, "id")}
              >
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="University">University</option>
                <option value="High School">High School</option>
              </select>
            </div>
            <div>
              <label htmlFor="institute">
                Enter your Educational Institution
              </label>
              <input
                type="text"
                name="institution"
                id="institution"
                value={level.value.name}
                onChange={(e) => handleEducationChange(e, index, "name")}
              />
            </div>
            <div>
              <label htmlFor="location">
                Enter location of your Educational Institution
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={level.value.location}
                onChange={(e) => handleEducationChange(e, index, "location")}
              />
            </div>
            <div>
              <label htmlFor="course-name">
                Enter the name of your pursued degree
              </label>
              <input
                type="text"
                name="course-name"
                id="course-name"
                value={level.value.course}
                onChange={(e) => handleEducationChange(e, index, "course")}
              />
            </div>
            <div>
              <label htmlFor="course-start">
                Enter the date when your course started
              </label>
              <input
                type="date"
                name="course-start"
                id="course-start"
                value={level.value.degreeStart}
                onChange={(e) => handleEducationChange(e, index, "degreeStart")}
              />
            </div>
            <div>
              <label htmlFor="course-end">
                Enter the date when your course end or is expected to end
              </label>
              <input
                type="date"
                name="course-end"
                id="course-end"
                value={level.value.degreeEnd || ""}
                onChange={(e) => handleEducationChange(e, index, "degreeEnd")}
              />
            </div>
          </div>
        );
      })}

      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddEducationClick();
        }}
      >
        Click to Add Education
      </button>
    </form>
  );
}

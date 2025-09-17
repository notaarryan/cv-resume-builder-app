import "../../styles/EducationalInfoPreview.css";
import { format } from "date-fns";

export default function EducationalInfoPreview({ personalInfo }) {
  const educationInfo = personalInfo.education;

  function formatDate(date) {
    const parsed = new Date(date);
    return !isNaN(parsed) ? format(parsed, "MMM. yyyy") : "";
  }

  return (
    <div className="education-info-preview-container">
      <div className="main-title">Education</div>

      {educationInfo.map((education) => {
        return (
          <div className="content">
            <div className="name">{education.value.name}</div>
            <div className="location">{education.value.location}</div>
            <div className="course">{education.value.course}</div>
            <div className="dates">
              <div className="degreeStart">
                {formatDate(education.value.degreeStart)}
              </div>
              <p>-</p>
              <div className="degreeEnd">
                {formatDate(education.value.degreeEnd)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

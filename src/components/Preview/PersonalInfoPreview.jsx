import "../../styles/PersonalInfoPreview.css";

export default function PersonalInfoPreview({ personalInfo }) {
  return (
    <div className="personal-info-preview-container">
      <div className="name">{personalInfo.name}</div>
      <div className="contact-info">
        <ul className="contacts-and-links">
          <li key="phone-number">{personalInfo.phoneNumber}</li>
          <li key="email">{personalInfo.email}</li>
          {personalInfo.links.map((linkObj) => {
            return (
              <li key={linkObj.id}>
                <a href={linkObj.key} target="_blank" rel="noreferrer noopener">
                  {linkObj.key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

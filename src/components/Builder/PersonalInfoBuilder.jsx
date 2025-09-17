import { useState } from "react";
import "../../styles/PersonalInfoBuilder.css";

export default function PersonalInfoBuilder({ personalInfo, setPersonalInfo }) {
  const initialInfo = personalInfo;
  const [links, setLinks] = useState(personalInfo.links);

  const handleNameChange = (event) => {
    const newInfo = { ...personalInfo, name: event.target.value };
    setPersonalInfo(newInfo);
  };

  const handlePhoneNumberChange = (event) => {
    const newInfo = { ...personalInfo, phoneNumber: event.target.value };
    setPersonalInfo(newInfo);
  };

  const handleEmailChange = (event) => {
    const newInfo = { ...personalInfo, email: event.target.value };
    setPersonalInfo(newInfo);
  };

  const handleLinkChange = (e, index, field) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: e.target.value };

    setLinks(newLinks);
    setPersonalInfo({ ...personalInfo, links: newLinks });
  };

  const handleAddLinkClick = () => {
    const newLinks = links;
    newLinks.push({ id: "", key: "" });
    setLinks(newLinks);
    setPersonalInfo({ ...personalInfo, links: newLinks });
  };

  return (
    <div className="personal-info-builder-container">
      <form>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={initialInfo.name}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div>
          <label htmlFor="phone-number">Enter your phone number: </label>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            value={initialInfo.phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={initialInfo.email}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="links-builder-container">
          <div>
            {links.map((link, index) => {
              return (
                <div id={index} key={index}>
                  <label htmlFor={`id-${index}`}>
                    Select which link you wish to add:
                  </label>
                  <select
                    name="select"
                    id={`select-${index}`}
                    value={link.id || ""}
                    onChange={(e) => {
                      handleLinkChange(e, index, "id");
                    }}
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="github">Github</option>
                    <option value="personal-website">Personal Website</option>
                  </select>
                  <label htmlFor={`link-${index}`}>Enter link: </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    value={link.key}
                    onChange={(e) => {
                      handleLinkChange(e, index, "key");
                    }}
                  />
                </div>
              );
            })}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddLinkClick();
              }}
            >
              Click to Add Link
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

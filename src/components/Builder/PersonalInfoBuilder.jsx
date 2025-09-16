import "../../styles/PersonalInfoBuilder.css";

export default function PersonalInfoBuilder({ personalInfo, setPersonalInfo }) {
  const initialInfo = personalInfo;

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

  return (
    <div className="personal-info-builder-container">
      <form action="get">
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
      </form>
    </div>
  );
}

const PersonalInfo = {
  name: "Aryan Parmar",
  phoneNumber: "(123) 456 7891",
  email: "hahhahaaha@gmail.com",
  links: [
    { id: "linkedin", key: "https://linkedin.com" },
    { id: "github", key: "https://github.com" },
  ],
  id: crypto.randomUUID(),
  education: {
    university: {
      name: "University of Windsor",
      location: "Windsor, ON",
      degreeStart: "Sept 2024",
      degreeEnd: "Sept 2028",
      course: "Bachelors of Science in Computer Science",
    },
  },
};

export default PersonalInfo;

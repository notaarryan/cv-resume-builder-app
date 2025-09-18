const PersonalInfo = {
  name: "Aryan Parmar",
  phoneNumber: "(123) 456 7891",
  email: "hahhahaaha@gmail.com",
  links: [
    { id: "linkedin", key: "https://linkedin.com" },
    { id: "github", key: "https://github.com" },
  ],
  id: crypto.randomUUID(),
  education: [
    {
      id: "University",
      value: {
        name: "University of Windsor",
        location: "Windsor, ON",
        degreeStart: "2024-09-01",
        degreeEnd: "2028-09-01",
        course: "Bachelors of Science in Computer Science",
      },
    },
  ],
  projects: [
    {
      id: "Tic-tac-toe",
      name: "Tic-tac-toe",
      link: "https://github.com",
      langs: ["JavaScript"],
      knowledgeGained: [
        "Improved problem-solving skills",
        "Learned game logic implementation",
        "Practiced DOM manipulation",
        "Enhanced JavaScript fundamentals",
        "Strengthened debugging and testing skills",
      ],
    },
  ],
};

export default PersonalInfo;

import { useState } from "react";

import "../../styles/ProjectsInfoBuilder.css";

export default function ProjectsInfoBuilder({ personalInfo, setPersonalInfo }) {
  const [projects, setProjects] = useState(personalInfo.projects);

  const handleProjectChange = (
    e,
    index,
    field,
    isLanguageChange = false,
    langIndex = 0,
    isKnowledgeChange = false,
    knowledgeIndex = 0
  ) => {
    const newProject = [...projects];

    if (isLanguageChange) {
      const newLangs = [...newProject[index].langs];
      newLangs[langIndex] = e.target.value;

      newProject[index] = { ...newProject[index], langs: newLangs };
      setProjects(newProject);
      setPersonalInfo({ ...personalInfo, projects: newProject });
      return;
    } else if (isKnowledgeChange) {
      const newKnowledgeGained = [...newProject[index].knowledgeGained];
      newKnowledgeGained[knowledgeIndex] = e.target.value;

      newProject[index] = {
        ...newProject[index],
        knowledgeGained: newKnowledgeGained,
      };
      setProjects(newProject);
      setPersonalInfo({ ...personalInfo, projects: newProject });
      return;
    }

    newProject[index] = { ...newProject[index], [field]: e.target.value };

    setProjects(newProject);
    setPersonalInfo({ ...personalInfo, projects: newProject });
  };

  const handleNewLanguage = (index) => {
    const newProject = [...projects];

    const newLangs = [...newProject[index].langs, " "];
    newProject[index] = { ...newProject[index], langs: newLangs };
    console.log(newLangs);
    setProjects(newProject);
    setPersonalInfo({ ...personalInfo, projects: newProject });
  };

  return (
    <div className="project-info-builder-container">
      <form>
        {projects.map((project, index) => {
          return (
            <div key={`${index}${project}`}>
              <div>
                <label htmlFor="name">Enter the name of the project: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={project.name}
                  onChange={(e) => handleProjectChange(e, index, "name")}
                />
              </div>

              <div>
                <label htmlFor="link">Enter the link of the project: </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  value={project.link}
                  onChange={(e) => handleProjectChange(e, index, "link")}
                />
              </div>

              <div>
                {project.langs.map((lang, langIndex) => {
                  return (
                    <div key={`lang-${index}-${langIndex}`}>
                      <label htmlFor="language">
                        {langIndex + 1}. Enter languages used:{" "}
                      </label>
                      <input
                        type="text"
                        name="language"
                        id="language"
                        onChange={(e) =>
                          handleProjectChange(
                            e,
                            index,
                            "lang",
                            true,
                            langIndex,
                            false,
                            0
                          )
                        }
                        value={lang}
                      />
                    </div>
                  );
                })}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleNewLanguage(index);
                  }}
                >
                  Add new language
                </button>
              </div>

              <div>
                {project.knowledgeGained.map((knowledge, knowledgeIndex) => {
                  return (
                    <div key={`knowledge-${index}-${knowledgeIndex}`}>
                      <label htmlFor="knowledgeGained">
                        {knowledgeIndex + 1}. Enter languages used:{" "}
                      </label>
                      <input
                        type="text"
                        name="knowledgeGained"
                        id="knowledgeGained"
                        onChange={(e) =>
                          handleProjectChange(
                            e,
                            index,
                            "knowledgeGained",
                            false,
                            0,
                            true,
                            knowledgeIndex
                          )
                        }
                        value={knowledge}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

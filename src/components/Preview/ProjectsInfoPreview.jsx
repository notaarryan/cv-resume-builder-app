import "../../styles/ProjectsInfoPreview.css";

export default function ProjectsInfoPreview({ personalInfo }) {
  const projectInfo = personalInfo.projects;

  return (
    <div className="projects-info-preview-container">
      <div className="main-title">Projects</div>

      {projectInfo.map((project, index) => {
        return (
          <div className="content" key={`${project.name}${index}`}>
            <div className="name">
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                {project.name}
              </a>
            </div>
            <div className="langs-container">
              {project.langs.map((lang) => {
                return <div key={`lang-${lang}`}>{lang}</div>;
              })}
            </div>
            <div className="knowledge-gained-container">
              <ul className="knowledgeGained">
                {project.knowledgeGained.map((knowledge) => {
                  return <li key={`knowledge-${knowledge}`}>{knowledge}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

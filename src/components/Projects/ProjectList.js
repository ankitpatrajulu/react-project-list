import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";
import languageSelection from "../../components-text/Projects/ProjectList";

const ProjectList = (props) => {
  const languageSelector =
    props.language === "en" ? languageSelection.EN : languageSelection.ES;
  if (props.projects.length === 0) {
    return (
      <p className={styles['projects-list__fallback']}>
        {languageSelector.no_projects_found}
      </p>
    );
  }
  if (props.projects.length > 0) {
    let projectContent = props.projects.map((project) => (
      <ProjectItem
        key={project.id}
        title={project.title}
        date={project.date}
        version={project.version}
        language={props.language}
      />
    ));
    return <ul className={styles['projects-list']}>{projectContent}</ul>;
  }
};

export default ProjectList;

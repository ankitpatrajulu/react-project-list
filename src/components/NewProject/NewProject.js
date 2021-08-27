import styles from "./NewProject.module.css";
import ProjectForm from "./ProjectForm";

const NewProject = (props) => {
  // const saveProjectDataHandler = (enteredProjectData) => {
  //   const projectData = {
  //     ...enteredProjectData,
  //     id: Math.random().toString(),
  //   };

  //   props.onAddProjectData(projectData);
  // };
  return (
    <div className={styles['new-project']}>
      <ProjectForm/>
    </div>
  );
};

export default NewProject;

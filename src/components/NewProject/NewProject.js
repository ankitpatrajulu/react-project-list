import "./NewProject.css";
import ProjectForm from "./ProjectForm";

const NewProject = (props) => {
  const saveProjectDataHandler = (enteredProjectData) => {
    const projectData = {
      ...enteredProjectData,
      id: Math.random().toString(),
    };

    props.onAddProjectData(projectData);
  };
  return (
    <div className="new-project">
      <ProjectForm onSaveProjectData={saveProjectDataHandler} language={props.language}/>
    </div>
  );
};

export default NewProject;

import { useState } from 'react';
import "./NewProject.css";
import ProjectForm from "./ProjectForm";

const NewProject = (props) => {
  const [language, setLanguage] = useState(props.lang)
  const saveProjectDataHandler = (enteredProjectData) => {
    const projectData = {
      ...enteredProjectData,
      id: Math.random().toString(),
    };

    props.onAddProjectData(projectData);
  };

  const languageChangeHandler = () => {
    setLanguage(props.language)
  }

  return (
    <div className="new-project">
      <ProjectForm onSaveProjectData={saveProjectDataHandler} lang={language}/>
    </div>
  );
};

export default NewProject;

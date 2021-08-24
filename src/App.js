import { useState } from 'react';

import ProjectItemList from "./components/Projects/ProjectItemList";
import NewProject from "./components/NewProject/NewProject";
import ProfileSection from './components/Projects/ProfileSection'

const INITIAL_DATA = [
  {
    id: "p1",
    date: new Date(2021, 7, 23),
    title: "Project 1",
    version: "1.0",
  },
  {
    id: "p2",
    date: new Date(2021, 7, 23),
    title: "Project 2",
    version: "1.4",
  },
  {
    id: "p3",
    date: new Date(2021, 7, 23),
    title: "Project 3",
    version: "2.0",
  },
  {
    id: "p4",
    date: new Date(2021, 7, 23),
    title: "Project 4",
    version: "1.6",
  },
]

const App = () => {
  const [language, setLanguage] = useState('en')
  const [projects, setProjects] = useState(INITIAL_DATA);

  const addProjectDataHandler = (enteredProjectData) => {
    console.log(enteredProjectData)
    setProjects((prevProjects) => {
      return [enteredProjectData, ...prevProjects]
    })
  };

  const languageHandler = (changeLanguage) => {
    setLanguage(changeLanguage)
    //console.log(changeLanguage)
  }

  return (
    <div>
      <ProfileSection language={language} onLanguageChange={languageHandler}/>
      <NewProject language={language} onAddProjectData={addProjectDataHandler} />
      <ProjectItemList language={language} projects={projects} />
    </div>
  );
};

export default App;

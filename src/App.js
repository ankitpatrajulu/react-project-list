import { useState, useEffect } from "react";

import ProjectItemList from "./components/Projects/ProjectItemList";
import NewProject from "./components/NewProject/NewProject";
import ProfileSection from "./components/Projects/ProfileSection";
import LanguageContext from "./store/language-context";

const INITIAL_DATA = [
  {
    id: "p1",
    date: new Date(2021, 7, 23),
    title: "Project 1",
    version: "1.0",
  },
  {
    id: "p2",
    date: new Date(2019, 7, 23),
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
    date: new Date(2022, 7, 23),
    title: "Project 4",
    version: "1.6",
  },
];

const App = () => {
  const [language, setLanguage] = useState("en");
  const [projects, setProjects] = useState(INITIAL_DATA);

  useEffect(() => {
    const isUserLanguageSelected = localStorage.getItem("IS_LANGUAGE_SELECTED");
    if (isUserLanguageSelected === "en" || isUserLanguageSelected === "es") {
      //console.log(isUserLanguageSelected)
      setLanguage(isUserLanguageSelected);
    }
  }, []);

  const addProjectDataHandler = (enteredProjectData) => {
    //console.log(enteredProjectData)
    setProjects((prevProjects) => {
      return [enteredProjectData, ...prevProjects];
    });
  };

  const languageHandler = (changeLanguage) => {
    localStorage.setItem("IS_LANGUAGE_SELECTED", changeLanguage);
    setLanguage(changeLanguage);
    //console.log(changeLanguage)
  };

  // const dateChangeHandler = (e) => {
  //   console.log('Called ' + e)
  // }

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        languageHandler: languageHandler,
        addProjectDataHandler: addProjectDataHandler,
      }}
    >
      <ProfileSection />
      <NewProject />
      <ProjectItemList projects={projects} />
    </LanguageContext.Provider>
  );
};

export default App;

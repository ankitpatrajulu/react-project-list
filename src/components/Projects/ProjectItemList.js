import { useState } from "react";
import Card from "../UI/Card";
import ProjectFilter from "./ProjectFilter";
import styles from "./ProjectItemList.module.css";
import ProjectList from "./ProjectList";
import ProjectChart from "./ProjectChart";

const ProjectItemList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const projects = props.projects.filter(
    (project) => project.date.getFullYear().toString() === selectedYear
  );
  //console.log(props.projects[0].date.getFullYear().toString(), selectedYear)
  //const [language, setLanguage] = useState(props.language)
  const filterConfigureHandler = (filterData) => {
    console.log(filterData);
    setSelectedYear(filterData);
  };
  //console.log(props.language)
  return (
    <div>
      <li>
        <Card className={styles.projects}>
          <ProjectFilter
            onFilterChange={filterConfigureHandler}
            selectedYear={selectedYear}
            language={props.language}
          />
          <ProjectChart projects={projects} language={props.language}/>
          <ProjectList projects={projects} language={props.language} />
        </Card>
      </li>
    </div>
  );
};

export default ProjectItemList;

import { useState } from "react";
import ProjectItem from "./ProjectItem";
import Card from "../UI/Card";
import ProjectFilter from "./ProjectFilter";
import "./ProjectItemList.css";

const ProjectItemList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterConfigureHandler = (filterData) => {
    console.log(filterData);
    setSelectedYear(filterData);
  };

  console.log(props.projects)

  return (
    <div>
      <Card className="projects">
        <ProjectFilter
          onFilterChange={filterConfigureHandler}
          selectedYear={selectedYear}
        />
        {props.projects.map((project) => (
          <ProjectItem
            title={project.title}
            date={project.date}
            version={project.version}
          />
        ))}
      </Card>
    </div>
  );
};

export default ProjectItemList;

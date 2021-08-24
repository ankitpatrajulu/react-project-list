import { useState } from "react";
import "./ProjectFilter.css";
import languageSelection from "../../components-text/Projects/ProjectFilter";

const ProjectFilter = (props) => {
  const [filterData, setFilterData] = useState(props.selectedYear);
  //const [language, setLanguage] = useState(props.language)
  //console.log(props.language)
  const languageSelector =
    props.language === "en" ? languageSelection.EN : languageSelection.ES;
  const filterChangeHandler = (e) => {
    setFilterData(e.target.value);
    props.onFilterChange(e.target.value);
  };
  return (
    <div className="projects-filter">
      <div className="projects-filter__control">
        <label>{languageSelector.label}</label>
        <select onChange={filterChangeHandler} value={filterData}>
          {languageSelector.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;

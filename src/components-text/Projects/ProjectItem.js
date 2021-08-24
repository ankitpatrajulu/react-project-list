import "./ProjectItem.css";
import ProjectDate from "./ProjectDate";
import Card from "../UI/Card";

const ProjectItem = (props) => {

  return (
    <Card className="project-item">
      <ProjectDate date={props.date} />
      <div className="project-item__description">
        <h2>{props.title}</h2>
        <div className="project-item__price">{props.version}</div>
      </div>
    </Card>
  );
};

export default ProjectItem;

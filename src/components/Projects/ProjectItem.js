import styles from "./ProjectItem.module.css";
import ProjectDate from "./ProjectDate";
import Card from "../UI/Card";

const ProjectItem = (props) => {

  return (
    <Card className={styles['project-item']}>
      <ProjectDate date={props.date} language={props.language}/>
      <div className={styles['project-item__description']}>
        <h2>{props.title}</h2>
        <div className={styles['project-item__price']}>{props.version}</div>
      </div>
    </Card>
  );
};

export default ProjectItem;

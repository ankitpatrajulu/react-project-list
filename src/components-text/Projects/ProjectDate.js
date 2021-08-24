import './ProjectDate.css'

const ProjectDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="project-date">
      <div className="project-date__month">{month}</div>
      <div className="project-date__year">{year}</div>
      <div className="project-date__day">{day}</div>
    </div>
  );
}

export default ProjectDate;

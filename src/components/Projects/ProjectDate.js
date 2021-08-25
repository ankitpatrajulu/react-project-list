import styles from './ProjectDate.module.css'

const ProjectDate = (props) => {
  const language = props.language === 'en' ? 'en-US' : 'es'
  const month = props.date.toLocaleString(language, { month: "long" });
  const day = props.date.toLocaleString(language, { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={styles['project-date']}>
      <div className={styles['project-date__month']}>{month}</div>
      <div className={styles['project-date__year']}>{year}</div>
      <div className={styles['project-date__day']}>{day}</div>
    </div>
  );
}

export default ProjectDate;

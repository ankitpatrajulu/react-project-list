import { useState, useContext } from "react";
import styles from "./ProjectForm.module.css";
import languageSelection from "../../components-text/NewProject/ProjectForm";
import DateTab from './DateTab';
import LanguageContext from "../../store/language-context";


const ProjectForm = () => {
  const languageContext = useContext(LanguageContext)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredVersion, setEnteredVersion] = useState("");
  const [show, setShow] = useState(false);
  //const locale = props.language === "en" ? 'en-GB' : es;

  const languageSelector =
    languageContext.language === "es" ? languageSelection.ES : languageSelection.EN;

  // Using one useState
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredDate: '',
  //     enteredVersion: ''
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // Should use this in case of having all states in one
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: e.target.value
    //     }
    // })
  };

  const dateChangeHandler = (e) => {
    // .toLocaleString('en-US', { month: "long" })
    // console.log(e)
    // console.log(new Date())
    
    // While using DatePicker
    setEnteredDate(e)

    // While using input date default
    //setEnteredDate(e.target.value);
  };

  const versionChangeHandler = (e) => {
    setEnteredVersion(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const projectData = {
      title: enteredTitle,
      date: enteredDate,
      version: enteredVersion,
      id: Math.random().toString(),
    };

    console.log(projectData)

    setEnteredTitle("");
    setEnteredVersion("");
    setEnteredDate("");

    languageContext.onProjectDataHandler(projectData);
    setShow(false);
  };

  const cancelClickHandler = (e) => {
    setEnteredTitle("");
    setEnteredVersion("");
    setEnteredDate("");
    setShow(false);
  };

  const addProjectHandler = (e) => {
    setShow(true);
  };

  let formContent = (
    <div>
      <button type="button" onClick={addProjectHandler}>
        {languageSelector.add_new_project}
      </button>
    </div>
  );

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-project__controls']}>
        {(!show && formContent) ||
          (show && (
            <div>
              <div className={styles['new-project__control']}>
                <label>{languageSelector.title}</label>
                <input
                  type="text"
                  placeholder={languageSelector.titlePlaceholder}
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className={styles['new-project__control']}>
                <label>{languageSelector.date}</label>
                {/* <DatePicker
                  selected={enteredDate}
                  onChange={dateChangeHandler}
                  locale={locale}
                  minDate="2000-01-01"
                  maxDate="2022-12-31"
                /> */}
                <DateTab language={languageContext.language} onDateChange={dateChangeHandler}/>
                {/* <input
                  type="date"
                  min="2000-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                /> */}
              </div>
              <div className={styles['new-project__control']}>
                <label>{languageSelector.version}</label>
                <input
                  type="number"
                  min="1.0"
                  step="0.1"
                  value={enteredVersion}
                  onChange={versionChangeHandler}
                />
              </div>
              <div className={styles['new-project__actions']}>
                <button type="button" onClick={cancelClickHandler}>
                  {languageSelector.cancel}
                </button>
                <button type="submit">{languageSelector.add}</button>
              </div>
            </div>
          ))}
      </div>
    </form>
  );
};

export default ProjectForm;

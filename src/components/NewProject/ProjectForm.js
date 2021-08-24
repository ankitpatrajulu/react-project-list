import { useState } from "react";
import "./ProjectForm.css";
import languageSelection from "../../components-text/NewProject/ProjectForm";
// import DatePicker from "react-datepicker";
// import { registerLocale } from "react-datepicker";
// import es from "date-fns/locale/es";
// registerLocale('es', es)

const ProjectForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredVersion, setEnteredVersion] = useState("");
  const [show, setShow] = useState(false);
  //const locale = props.language === "en" ? 'en-GB' : es;

  const languageSelector =
    props.language === "es" ? languageSelection.ES : languageSelection.EN;

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
    setEnteredDate(e.target.value);
  };

  const versionChangeHandler = (e) => {
    setEnteredVersion(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const projectData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      version: enteredVersion,
    };

    setEnteredTitle("");
    setEnteredVersion("");
    setEnteredDate("");

    props.onSaveProjectData(projectData);
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
      <div className="new-project__controls">
        {(!show && formContent) ||
          (show && (
            <div>
              <div className="new-project__control">
                <label>{languageSelector.title}</label>
                <input
                  type="text"
                  placeholder={languageSelector.titlePlaceholder}
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className="new-project__control">
                <label>{languageSelector.date}</label>
                {/* <DatePicker
                  selected={enteredDate}
                  onChange={dateChangeHandler}
                  locale={locale}
                  minDate="2000-01-01"
                  maxDate="2022-12-31"
                /> */}
                <input
                  type="date"
                  min="2000-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
              </div>
              <div className="new-project__control">
                <label>{languageSelector.version}</label>
                <input
                  type="number"
                  min="1.0"
                  step="0.1"
                  value={enteredVersion}
                  onChange={versionChangeHandler}
                />
              </div>
              <div className="new-project__actions">
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

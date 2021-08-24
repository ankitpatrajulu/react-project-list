import { useState } from "react";
import "./LanguageSelection.css";
import Card from '../UI/Card'
import languageSelection from "../../components-text/Projects/LanguageSelection";

const LanguageSelection = (props) => {
  const [language, setLanguage] = useState(
    props.language === "en" ? "English (United States)" : "Spanish (Spain)"
  );
  const languageSelector =
    props.language === "en" ? languageSelection.EN : languageSelection.ES;
  console.log(props.language)
  const languageChangeHandler = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    props.onLanguageChange(lang);
  };

  return (
    <Card className="language-selection">
      <div className="language-selection__control">
        <label>{languageSelector.label}</label>
        <select onChange={languageChangeHandler} value={language}>
          <option value={languageSelector.options[0].languageCode}>
            {languageSelector.options[0].language}
          </option>
          <option value={languageSelector.options[1].languageCode}>
            {languageSelector.options[1].language}
          </option>
        </select>
      </div>
    </Card>
  );
};

export default LanguageSelection;

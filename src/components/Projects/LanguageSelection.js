import { useState, useContext } from "react";
import styles from "./LanguageSelection.module.css";
import Card from '../UI/Card'
import languageSelection from "../../components-text/Projects/LanguageSelection";
import LanguageContext from "../../store/language-context";

const LanguageSelection = () => {
  const languageContext = useContext(LanguageContext)

  const [language, setLanguage] = useState(
    languageContext.language === "en" ? "English (United States)" : "Spanish (Spain)"
  );
  const languageSelector =
    languageContext.language === "en" ? languageSelection.EN : languageSelection.ES;
  console.log(languageContext.language)
  const languageChangeHandler = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    languageContext.languageHandler(lang);
  };

  return (
    <Card className={styles['language-selection']}>
      <div className={styles['language-selection__control']}>
        <label>{languageSelector.label}</label>
        <select onChange={languageChangeHandler} value={languageContext.language} placeholder={language}>
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

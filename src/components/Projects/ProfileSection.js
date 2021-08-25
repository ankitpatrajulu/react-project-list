import { useState } from "react";
import LanguageSelection from "./LanguageSelection";
import styles from './ProfileSection.module.css'

const ProfileSection = (props) => {
  const [language, setLanguage] = useState(props.language);

  const languageModifyHandler = (changedLanguage) => {
    setLanguage(
      changedLanguage
    );
    props.onLanguageChange(changedLanguage)
  };

  return (
    <div className={styles['profile-section']}>
      <LanguageSelection
        onLanguageChange={languageModifyHandler}
        language={language}
      />
    </div>
  );
};

export default ProfileSection;

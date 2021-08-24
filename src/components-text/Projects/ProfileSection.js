import { useState } from "react";
import LanguageSelection from "./LanguageSelection";

const ProfileSection = (props) => {
  const [language, setLanguage] = useState(props.language);

  const languageModifyHandler = (changedLanguage) => {
    setLanguage(
      changedLanguage
    );
    props.onLanguageChange(changedLanguage)
  };

  return (
    <div className="profile-section">
      <LanguageSelection
        onLanguageChange={languageModifyHandler}
        language={language}
      />
    </div>
  );
};

export default ProfileSection;

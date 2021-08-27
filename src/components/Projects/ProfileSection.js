import LanguageSelection from "./LanguageSelection";
import styles from './ProfileSection.module.css'

const ProfileSection = () => {
  //const [language, setLanguage] = useState(props.language);

  // const languageModifyHandler = (changedLanguage) => {
  //   // setLanguage(
  //   //   changedLanguage
  //   // );
  //   props.onLanguageChange(changedLanguage)
  // };

  return (
    <div className={styles['profile-section']}>
      <LanguageSelection
      />
    </div>
  );
};

export default ProfileSection;

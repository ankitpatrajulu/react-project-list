import React from "react";

const LanguageContext = React.createContext({
  language: "en",
  languageHandler: () => {},
  addProjectDataHandler: () => {}
});

export default LanguageContext;

import { useContext } from 'react';
import LanguageContext from '../../store/language-context';
import Chart from "../Chart/Chart";
import languageSelection from "../../components-text/Projects/ProjectChart";

const ProjectChart = (props) => {
  const languageContext = useContext(LanguageContext)
  const languageSelector =
  languageContext.language === "en" ? languageSelection.EN : languageSelection.ES;
  const chartDataPoints = [
    {
      label: languageSelector[0],
      value: 0,
    },
    {
      label: languageSelector[1],
      value: 0,
    },
    {
      label: languageSelector[2],
      value: 0,
    },
    {
      label: languageSelector[3],
      value: 0,
    },
    {
      label: languageSelector[4],
      value: 0,
    },
    {
      label: languageSelector[5],
      value: 0,
    },
    {
      label: languageSelector[6],
      value: 0,
    },
    {
      label: languageSelector[7],
      value: 0,
    },
    {
      label: languageSelector[8],
      value: 0,
    },
    {
      label: languageSelector[9],
      value: 0,
    },
    {
      label: languageSelector[10],
      value: 0,
    },
    {
      label: languageSelector[11],
      value: 0,
    },
  ];

  for (const project of props.projects) {
    const projMonth = project.date.getMonth() - 1;
    chartDataPoints[projMonth].value += parseInt(project.version);
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ProjectChart;

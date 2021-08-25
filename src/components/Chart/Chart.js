import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...valueArray)
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar value={dataPoint.value} 
        maxValue={totalMaximum}
        label={dataPoint.label}
        key={dataPoint.label}/>
      ))}
    </div>
  );
};

export default Chart;

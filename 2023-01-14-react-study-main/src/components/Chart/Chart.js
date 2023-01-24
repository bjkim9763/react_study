import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value); //dataPoint의 모든 객체를 value의 숫자로 치환
  const totalMaximum = Math.max(...dataPointValues); //dataPointValues의 인자는 숫자인 상태

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

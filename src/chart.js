import { Line } from 'react-chartjs-2';
import 'chart.js/dist/Chart.min.css';

function LineChart({ data, options }) {
  return (
    <Line data={data} options={options} />
  );
}

export default LineChart;

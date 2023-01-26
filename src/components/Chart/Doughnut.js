import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import randomColor from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, title }) => {
  var colors =
    data &&
    randomColor({
      count: Object.keys(data).length,
      luminosity: "dark",
      hue: "random",
      seed: 1,
    });

  const datas = {
    labels: data ? Object.keys(data) : [],
    datasets: [
      {
        label: title || "",
        data: data ? Object.values(data) : [],
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: title || "",
      },
    },
  };

  return (
    <>
      <Doughnut data={datas} options={options} />
    </>
  );
};

export default DoughnutChart;
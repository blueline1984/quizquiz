import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Chart({ quiz, correctAnswerNumber }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const correctPercentage = (correctAnswerNumber / quiz.length) * 100 + "%";
  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        label: "# of Quiz",
        data: [correctAnswerNumber, quiz.length],
        backgroundColor: ["#F7CF6A", "#6DBDBF"],
        borderColor: ["#F7CF6A", "#6DBDBF"],
        borderWidth: 1,
      },
    ],
    text: correctPercentage,
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          render: "percentage",
          boxWidth: 80,
          padding: 10,
          font: {
            size: 15,
            family: "Secular One",
          },
          color: "#fff",
        },
        fullSize: true,
        align: "right",
      },
    },
    animation: {
      duration: 3000,
    },
  };
  const plugins = [
    {
      beforeDraw: function (chart) {
        let width = chart.width;
        let height = chart.height;
        let ctx = chart.ctx;
        let fontSize = (height / 500).toFixed(2);
        let text = correctPercentage;
        let textX = Math.round((width - ctx.measureText(text).width) / 2);
        let textY = height / 2;

        ctx.restore();
        ctx.font = fontSize + "em Secular One";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fff";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return <Doughnut data={data} options={options} plugins={plugins} />;
}

export default Chart;

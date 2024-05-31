import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  series: [
    {
      name: "Laki-laki",
      data: [503, 291, 275, 282, 276, 325, 363, 346, 241, 150, 143, 129, 49, 58, 37, 21],
    },
    {
      name: "Perempuan",
      data: [-472, -278, -257, -253, -248, -343, -343, -268, -191, -180, -150, -141, -56, -38, -36, -33],
    },
  ],
  options: {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
 
      },
    },
    colors: ['#97C1E4', '#F9A9A9'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+'],
      
      labels: {
        formatter: (val) => Math.abs(val),
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      title: {
        text: " Usia",
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val);
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      labels: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
};

const PopulationPyramidChart = () => (
  <div className="flex justify-center mx-5 md:mx-10 lg:mx-70 my-5 ">
    <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
        <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
          Penduduk & Angkatan Kerja
        </Typography>
      </div>
      <div className="p-4">
        <Chart options={chartConfig.options} series={chartConfig.series} type="bar" height="600" />
      </div>
    </div>
  </div>
);

export default PopulationPyramidChart;
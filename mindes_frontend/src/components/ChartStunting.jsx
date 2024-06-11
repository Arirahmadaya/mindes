import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "bar",
  series: [
    {
      name: "Stunting 2020",
      data: [100, 85, 70, 55, 90, 60],
    },
    {
      name: "Stunting 2024",
      data: [80, 75, 65, 50, 70, 45],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3450E7", "#97C1E4"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: false,
        borderRadius: 4,
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        "Keluarga Sasaran",
        "Berisiko",
        "Baduta",
        "Balita",
        "Pasangan Usia Subur (PUS)",
        "PUS Hamil",
      ],
      labels: {
        style: {
          colors: "#616161",
          fontSize: "10px",
          fontFamily: "inherit",
          fontWeight: 400,
          fontStyle: "normal",
        },
        rotate: 0,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      min: 0,
      max: 120,
      tickAmount: 4,
      forceNiceScale: true,
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
    },
    fill: {
      opacity: 0.8,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: ["#FFFFFF", "#FFFFFF"],
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function ChartStunting() {
  return (
    <div className="flex justify-center mx-5 md:mx-10 lg:mx-70 my-5 ">
      <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
          <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
            Data Stunting 2020 dan 2024
          </Typography>
        </div>
        <div className="p-4">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type={chartConfig.type}
            height="420"
          />
        </div>
      </div>
    </div>
  );
}

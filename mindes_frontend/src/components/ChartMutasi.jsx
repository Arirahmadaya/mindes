import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  series: [
    {
      name: "Mutasi Penduduk",
      data: [110, 45, 90, 30], 
    },
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
        BorderRadius: 10,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Lahir", "Mati", "Datang", "Pindah"],
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
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
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: ["#97C1E4"],
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#FFFFFF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#97C1E4",
            opacity: 1,
          },
        ],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Org`,
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  },
};

const HorizontalBarChartMutasiPenduduk = () => (
  <div className="flex justify-center mx-5 md:mx-10 lg:mx-20 my-5">
    <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
        <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
          Mutasi Penduduk
        </Typography>
      </div>
      <div className="p-4">
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type="bar"
          height="420"
        />
      </div>
    </div>
  </div>
);

export default HorizontalBarChartMutasiPenduduk;

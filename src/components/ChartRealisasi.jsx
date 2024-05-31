import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "bar",
  series: [
    {
      name: "Realisasi Anggaran",
      data: [450000000, 600000000, 350000000, 500000000, 250000000],
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
    colors: ["#97C1E4"],
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
        "Penyelengaraan Dana Desa",
        "Pelaksanaan Desa",
        "Pembinaan Kemasyarakatan Desa",
        "Pemberdayaan Masyarakat Desa",
        "Penanggulangan",
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
        formatter: (val) => `${(val / 700000000) * 100}%`,
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      min: 0,
      max: 700000000,
      tickAmount: 10,
      forceNiceScale: true,
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: ["#FFFFFF"],
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `Rp${val.toLocaleString()}`,
      },
      theme: "dark",
    },
  },
};

export default function ChartRealisasi() {
  return (
    <div className="flex justify-center mx-5 md:mx-10 lg:mx-70 my-5 ">
      <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
          <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
            Realisasi APBDes 2024
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

import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "bar",
  series: [
    {
      name: "Penyelengaraan Dana Desa",
      data: [450000000],
    },
    {
      name: "Pelaksanaan Desa",
      data: [600000000],
    },
    {
      name: "Pembinaan Kemasyarakatan Desa",
      data: [350000000],
    },
    {
      name: "Pemberdayaan Masyarakat Desa",
      data: [500000000],
    },
    {
      name: "Penanggulangan Bencana",
      data: [250000000],
    },
    {
      name: "Keadaaan Darurat/Mendesak Desa",
      data: [200000000],
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
        horizontal: true,
        barHeight: "50%",
        distributed: true,
        borderRadius: 4,
      },
    },
    xaxis: {
      categories: ["2024"],
      labels: {
        show: false,
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
      max: 700000000,
      tickAmount: 5,
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
        gradientToColors: ["#3450E7"],
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
  },
};

export default function ChartBelanja() {
  return (
    <div className="flex justify-center mx-5 md:mx-10 lg:mx-70 my-5 ">
      <div className="bg-white rounded-lg w-full">
        <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
          <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
            Anggaran Belanja 2024
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

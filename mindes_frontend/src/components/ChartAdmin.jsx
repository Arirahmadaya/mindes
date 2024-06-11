import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "bar",
  series: [
    {
      name: "Anggaran Belanja 2024",
      data: [450000000, 600000000, 350000000, 500000000, 250000000, 200000000],
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
        "Pemberdayaan<br>Masyarakat Desa",
        "Penanggulangan Bencana",
        "Keadaan Darurat/<br>Mendesak Desa",
      ],
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px", // Menjaga ukuran font tetap sama
          fontFamily: "inherit",
          fontWeight: 400,
          fontStyle: "normal", // Memastikan font tidak miring
        },
        rotate: 0, // Mengatur rotasi ke 0 derajat
        formatter: (val) => {
          return val.replace(/<br>/g, "\n"); // Mengganti <br> dengan newline
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
      min: 0,
      max: 700000000,
      tickAmount: 4, // Menampilkan 5 kategori (0, 175000000, 350000000, 525000000, 700000000)
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
      theme: "dark",
    },
  },
};

export default function ChartAdmin() {
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
            height="350"
            width="100%" // Menambahkan properti ini untuk membuat chart responsif
          />
        </div>
      </div>
    </div>
  );
}

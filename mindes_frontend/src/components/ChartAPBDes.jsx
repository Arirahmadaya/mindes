import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "bar",
  series: [
    {
      name: "Pendapatan",
      data: [
        750000000, 820000000, 900000000, 1000000000, 1100000000, 1150000000,
        1200000000, 1250000000, 1300000000, 1350000000, 1400000000,
      ],
    },
    {
      name: "Belanja",
      data: [
        700000000, 800000000, 850000000, 950000000, 1050000000, 1120000000,
        1180000000, 1230000000, 1280000000, 1320000000, 1380000000,
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#97C1E4", "#3450E7"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "10px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "10px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      min: 0,
      max: 1600000000,
      tickAmount: 5, // Menampilkan 5 kategori
      forceNiceScale: true,
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
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
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
        },
      },
    ],
  },
};

export default function ChartAPBDes() {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
          <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
            Anggaran Pendapatan dan Belanja Desa
          </Typography>
        </div>
        <div className="lg:p-4 py-2">
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

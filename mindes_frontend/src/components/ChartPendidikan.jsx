import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  series: [
    {
      name: "Jumlah Penduduk",
      data: [491, 667, 861, 682, 462, 64, 17, 3, 1, 0, ]
    }
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            plotOptions: {
              bar: {
                columnWidth: "50%",
              },
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                columnWidth: "60%",
              },
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                columnWidth: "70%",
              },
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#97C1E4"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: [
        "Tidak/Belum Sekolah",
        "Tidak Tamat SD/Sederajat",
        "Tamat SD/Sederajat",
        "SLTP/Sederajat",
        "SLTA/Sederajat",
        "Diploma I/II",
        "Diploma III",
        "Diploma IV/Strata I",
        "Strata II",
        "Strata III",
      ],
      labels: {
        style: {
          colors: "#616161",
          fontSize: "8px",
          fontFamily: "inherit",
          fontWeight: 400,
          fontStyle: 'italic'
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
    grid: {
      borderColor: "#dddddd",
      strokeDashArray: 5,
    },
  
    fill: {
        opacity: 1,
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
          colorStops: [
            {
              offset: 0,
              color: "#97C1E4",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#FFFFFF",
              opacity: 1,
            },
          ],
        },
      },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `${val} Org`,
      },
    },
  },
};

const BarChartTingkatPendidikan = () => (
  <div className="flex justify-center mx-5 md:mx-10 lg:mx-20 my-5">
    <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
        <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
          Tingkat Pendidikan Penduduk
        </Typography>
      </div>
      <div className="p-4">
        <Chart options={chartConfig.options} series={chartConfig.series} type="bar" height="420" />
      </div>
    </div>
  </div>
);

export default BarChartTingkatPendidikan;

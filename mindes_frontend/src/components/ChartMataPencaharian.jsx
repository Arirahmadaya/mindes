import React from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-tailwind/react";

const chartConfig = {
  series: [165, 88, 32, 986, 734, 875, 105, 2315],
  options: {
    chart: {
      type: "pie",
    },
    labels: [
      "Petani Sendiri",
      "Buruh Tani",
      "Nelayan",
      "Pengusaha",
      "Buruh Industri",
      "Pedagang",
      "PNS/ABRI",
      "Lain-Lain",
    ],
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f"],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} Org`,
      },
    },
  },
};

const PieChartMataPencaharian = () => (
  <div className="flex justify-center mx-5 md:mx-10 lg:mx-20 my-5">
    <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
        <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
          Mata Pencaharian
        </Typography>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">Petani Sendiri</td>
                <td className="py-2 text-right">165 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Buruh Tani</td>
                <td className="py-2 text-right">88 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Nelayan</td>
                <td className="py-2 text-right">32 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Pengusaha</td>
                <td className="py-2 text-right">986 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Buruh Industri</td>
                <td className="py-2 text-right">734 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Pedagang</td>
                <td className="py-2 text-right">875 Org</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">PNS/ABRI</td>
                <td className="py-2 text-right">105 Org</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Lain-Lain</td>
                <td className="py-2 text-right">2315 Org</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Chart options={chartConfig.options} series={chartConfig.series} type="pie" height="350" />
        </div>
      </div>
    </div>
  </div>
);

export default PieChartMataPencaharian;

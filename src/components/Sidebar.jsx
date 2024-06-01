import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  ChatBubbleLeftIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  EnvelopeIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/20/solid";

function Sidebares() {
  const location = useLocation();

  const menu1 = [
    {
      name: "Dashboard",
      icon: <HomeModernIcon width={18} className="text-blue-500" />,
      path: "/admin/beranda",
    },
    {
      name: "Infografis",
      icon: <ChartPieIcon width={18} className="text-gray-600" />,
      path: "/admin/infografis",
    },
    {
      name: "Info Desa",
      icon: <BellAlertIcon width={18} className="text-gray-600" />,
      path: "/admin/infodesa",
    },
  ];

  const menu2 = [
    {
      name: "Keuangan",
      icon: <ChatBubbleLeftIcon width={18} className="text-gray-600 " />,
      path: "/admin/realisasi",
    },
    {
      name: "Laporan",
      icon: <ClipboardDocumentIcon width={18} className="text-gray-600" />,
      path: "/admin/laporan",
    },
    {
      name: "Berita",
      icon: <UsersIcon width={18} className="text-gray-600" />,
      path: "/admin/berita",
    },
    {
      name: "User",
      icon: <EnvelopeIcon width={18} className="text-gray-600" />,
      path: "/admin/user",
    },
  ];

  const menu3 = [
    {
      name: "Logout",
      icon: <ArrowLeftOnRectangleIcon width={18} className="text-gray-600 " />,
      path: "/admin/login",
    },
  ];

  return (
    <div className="App">
      <section className="w-20 sm:w-64 bg-white h-screen">
        <div className="border-b px-5 py-3 text-center sm:text-left">
          <div className="flex">
            <img
              src="/logo/icon_dark.png"
              alt="logo"
              className="h-10 pr-2 block w-auto"
            />
            <div className="text-black hover:text-black/80 hidden sm:block -mt-[2px]">
              <span className="font-bold text-body-1 text-blue">MINDES</span>
              <p className="text-caption-2">Desa Kalinyamat Kulon</p>
            </div>
          </div>
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu1} title={{ sm: "MAIN", xs: "MAIN" }} location={location} />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu2} title={{ sm: "INFO", xs: "INFO" }} location={location} />
        </div>
        <div className="text-sm">
          <Menus menu={menu3} title={{ sm: "", xs: "" }} location={location} />
        </div>
      </section>
    </div>
  );
}

function Menus({ menu, title, location }) {
  return (
    <div className="py-5">
      <h6 className="mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 ">
        <span className="sm:hidden">{title.xs}</span>
        <span className="hidden sm:block">{title.sm}</span>
      </h6>
      <ul>
        {menu.map((val, index) => {
          const isActive = location.pathname === val.path;
          const menuActive = isActive
            ? "bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-400 flex items-center"
            : "px-3 py-2 flex items-center";

          const textActive = isActive ? "text-blue-500" : "text-gray-700";

          return (
            <li key={index} className={`${menuActive} cursor-pointer mx-5`}>
              <Link to={val.path} className="flex items-center w-full">
                {val.icon}
                <div className={`ml-2 ${textActive} hidden sm:block`}>
                  {val.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebares;

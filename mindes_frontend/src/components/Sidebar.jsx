import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  ArrowLeftOnRectangleIcon,
  IdentificationIcon,
  BanknotesIcon,
  TableCellsIcon,
  CreditCardIcon,
  InboxStackIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/20/solid";

function Sidebares() {
  const location = useLocation();

  const menu1 = [
    {
      name: "Beranda",
      icon: <HomeIcon width={18} className="text-blue-500" />,
      path: "/admin/beranda",
    },
    {
      name: "User",
      icon: <UsersIcon width={18} className="text-gray-600" />,
      path: "/admin/user",
    },
    {
      name: "Agenda",
      icon: <CalendarDaysIcon width={18} className="text-gray-600" />,
      path: "/admin/agenda",
    },
    {
      name: "Berita",
      icon: <NewspaperIcon width={18} className="text-gray-600" />,
      path: "/admin/berita",
    },
    {
      name: "Penduduk",
      icon: <IdentificationIcon width={18} className="text-gray-600" />,
      path: "/admin/penduduk",
    },
  ];

  const menu2 = [
    {
      name: "Realisasi",
      icon: <BanknotesIcon width={18} className="text-gray-600 " />,
      path: "/admin/realisasi",
    },
    {
      name: "Laporan",
      icon: <PresentationChartBarIcon width={18} className="text-gray-600" />,
      path: "/admin/realisasi/laporan",
    },
  ];

  const menu3 = [
    {
      name: "Kategori Berita",
      icon: <TableCellsIcon width={18} className="text-gray-600 " />,
      path: "/admin/berita/kategori",
    },
    {
      name: "Akuntansi",
      icon: <CreditCardIcon width={18} className="text-gray-600 " />,
      path: "/admin/realisasi/akuntansi",
    },
    {
      name: "Bidang",
      icon: <InboxStackIcon width={18} className="text-gray-600 " />,
      path: "/admin/realisasi/bidang",
    },
    
  ];
  const menu4 = [
    {
      name: "Logout",
      icon: <ArrowLeftOnRectangleIcon width={18} className="text-gray-600 " />,
      path: "/admin/login",
    },
  ];

  return (
    <div className="App">
      <section className="w-full sm:w-64 bg-white h-100%">
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
          <Menus
            menu={menu1}
            title={{ sm: "UMUM", xs: "UMUM" }}
            location={location}
          />
        </div>
        <div className="border-b text-sm">
          <Menus
            menu={menu2}
            title={{ sm: "REALISASI", xs: "REALISASI" }}
            location={location}
          />
        </div>
        <div className="border-b text-sm">
          <Menus
            menu={menu3}
            title={{ sm: "DATA MASTER", xs: "DATA MASTER"  }}
            location={location}
          />
        </div>
        <div className="border-b text-sm">
          <Menus
            menu={menu4}
            title={{ }}
            location={location}
          />
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

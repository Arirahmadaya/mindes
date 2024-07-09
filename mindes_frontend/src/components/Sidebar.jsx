import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Dimodifikasi
import {
  HomeIcon,
  UsersIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  IdentificationIcon,
  BanknotesIcon,
  TableCellsIcon,
  CreditCardIcon,
  InboxStackIcon,
  PresentationChartBarIcon,
  ArrowLeftOnRectangleIcon, // Pastikan menggunakan ikon yang benar
} from "@heroicons/react/20/solid";

function Sidebares() {
  const location = useLocation();
  const navigate = useNavigate(); // Ditambahkan

  const handleLogout = () => { // Ditambahkan
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu1 = [
    {
      name: "Beranda",
      icon: <HomeIcon width={18} className="text-blue-500" />,
      path: "/admin/beranda",
    },
    {
      name: "User",
      icon: <UsersIcon width={18} className="" />,
      path: "/admin/user",
    },
    {
      name: "Agenda",
      icon: <CalendarDaysIcon width={18} className="" />,
      path: "/admin/agenda",
    },
    {
      name: "Berita",
      icon: <NewspaperIcon width={18} className="" />,
      path: "/admin/berita",
    },
    {
      name: "Penduduk",
      icon: <IdentificationIcon width={18} className="" />,
      path: "/admin/penduduk",
    },
  ];

  const menu2 = [
    {
      name: "Realisasi",
      icon: <BanknotesIcon width={18} className=" " />,
      path: "/admin/realisasi",
    },
    {
      name: "Laporan",
      icon: <PresentationChartBarIcon width={18} className="" />,
      path: "/admin/laporan",
    },
  ];

  const menu3 = [
    {
      name: "Kategori Berita",
      icon: <TableCellsIcon width={18} className=" " />,
      path: "/admin/datamaster/kategori",
    },
    {
      name: "Akuntansi",
      icon: <CreditCardIcon width={18} className=" " />,
      path: "/admin/datamaster/akuntansi",
    },
    {
      name: "Bidang",
      icon: <InboxStackIcon width={18} className=" " />,
      path: "/admin/datamaster/bidang",
    },
  ];

  const menu4 = [
    {
      name: "Logout",
      icon: <ArrowLeftOnRectangleIcon width={18} className=" " />,
      onClick: handleLogout, // Ditambahkan
    },
  ];

  return (
    <div className="App">
      <section className="w-full sm:w-64 bg-white h-100%">
        <div className="border-b px-5 py-3 text-center sm:text-left">
          <div className="flex">
            <span className="flex h-10 items-center">
            <img
              src="/logo/icon_dark.png"
              alt="logo"
              className="lg:h-full h-8 pr-2 block w-auto"
            />
            </span>
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
            title={{ sm: "DATA MASTER", xs: "DATA MASTER" }}
            location={location}
          />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu4} title={{}} location={location} />
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
      <ul className="sidebar-menu">
        {menu.map((val, index) => {
          const isActive =
            location.pathname === val.path ||
            location.pathname.startsWith(val.path + "/");
          const menuActive = isActive
            ? "bg-[#1f308b] bg-opacity-95 text-white -ml-[5px]"
            : "";

          return (
            <li
              key={index}
              className={`cursor-pointer px-5 ${
                menuActive ? "border-l-5  border-[#1f308b]" : ""
              }  `}
              onClick={val.onClick} // Ditambahkan
            >
              <div
                className={`px-3 py-2 rounded-md flex items-center ${menuActive}`}
              >
                {val.path ? (
                  <Link to={val.path} className="flex items-center w-full">
                    {val.icon}
                    <div
                      className={`ml-2 ${
                        isActive ? "text-white ml-3 " : "text-gray-700"
                      } hidden sm:block`}
                    >
                      {val.name}
                    </div>
                  </Link>
                ) : (
                  <>
                    {val.icon}
                    <div
                      className={`ml-2 ${
                        isActive ? "text-white ml-3 " : "text-gray-700"
                      } hidden sm:block`}
                    >
                      {val.name}
                    </div>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebares;

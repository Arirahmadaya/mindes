import React from "react";
import { Link } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { CreditCard, Users, BarChart2, Search, Award } from "react-feather";

export default function NavbarGrafis() {
  const location = useLocation();

  const linkClassName = (path) =>
    `flex flex-col items-center group hover:font-semibold ${
      location.pathname === path
        ? "underline underline-offset-[10px] decoration-[3px] decoration-primary-30 font-semibold"
        : ""
    } whitespace-nowrap`;

  const iconClassName = (path) =>
    `h-6 w-6 mb-1 ${location.pathname === path ? "stroke-2" : "stroke-1"} group-hover:stroke-2`;

  return (
    <div className="flex gap-4 ">
      <Link href="/infografis" className={linkClassName("/infografis")}>
        <CreditCard className={iconClassName("/infografis")} />
        APBDes
      </Link>
      <Link href="/infografis/penduduk" className={linkClassName("/infografis/penduduk")}>
        <Users className={iconClassName("/infografis/penduduk")} />
        Penduduk
      </Link>
      <Link href="/infografis/stunting" className={linkClassName("/infografis/stunting")}>
        <BarChart2 className={iconClassName("/infografis/stunting")} />
        Stunting
      </Link>
      <Link href="/infografis/cekdata" className={linkClassName("/infografis/cekdata")}>
        < Search className={iconClassName("/infografis/cekdata")} />
        Cek Data
      </Link>
      <Link href="/infografis/sdgs" className={linkClassName("/infografis/sdgs")}>
        <Award className={iconClassName("/infografis/sdgs")} />
        SDGs
      </Link>
    </div>
  );
}

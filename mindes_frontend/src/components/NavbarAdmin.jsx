import React from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Link
} from "@nextui-org/react";

import { Search } from "react-feather";

export default function NavbarAdmin() {
  return (
    <Navbar isBordered className="bg-grayscale-10 rounded-b-lg">
      <NavbarContent justify="start">
        <div className="relative max-w-full sm:max-w-md h-12">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <input
            className="
       w-full h-full pl-12 pr-4 py-2 rounded-2xl
       text-base text-gray-700 bg-white border border-gray-300
       focus:outline-none focus:ring-2 focus:ring-primary-30/50 hover:primary focus:border-transparent
       transition-all duration-200 ease-in-out shadow-primary
        hover:shadow-lg
     "
            placeholder="Cari data..."
            type="search"
          />
        </div>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex items-center">
              <Avatar
                isBordered
                as="button"
                className="transition-transform "
                color="default"
                name="Ferianta"
                size="sm"
                src="/img_desa/sudirmo.jpg"
              />
              <p className="font-semibold ml-3 hover:cursor-pointer">
                Ferianta
              </p>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Login sebagai</p>
              <p className="font-semibold">ferianta@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="profile"  as={Link} href="/profil/userprofil">
              Profile
            </DropdownItem>
            <DropdownItem key="help" as={Link} href="/bantuan">
              Bantuan
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

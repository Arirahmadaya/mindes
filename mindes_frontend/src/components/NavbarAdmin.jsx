import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

import { ArrowDown, Search, User } from "react-feather";

export default function NavbarAdmin() {
  return (
    <Navbar isBordered className="bg-grayscale-10 rounded-b-lg">
      <NavbarContent justify="start">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search size={18} />}
          type="search"
        />
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
                src="/img_desa/bowo_leksono.jpg"
              />
              <p className="font-semibold ml-3 hover:cursor-pointer">
                Ferianta
              </p>
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Login sebagai</p>
              <p className="font-semibold">ferian@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="analytics">Profile</DropdownItem>
            <DropdownItem key="settings">Pengaturan</DropdownItem>
            <DropdownItem key="configurations">Konfigurasi</DropdownItem>
            <DropdownItem key="help_and_feedback">Bantuan</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

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

import {
  ArrowDown,
  MessageCircle,
  MessageSquare,
  Search,
  User,
} from "react-feather";

export default function NavbarAdmin() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="lg:-ml-32 flex  border-2">
          <img
            src="logo/logo_light.png"
            alt="logo"
            className="md:w-12 md:h-12 pr-2 blok w-10 h-10 "
          />
          <div className="text-black hover:text-black/80 hidden sm:block">
            <p className="font-bold lg:text-heading-6 text-body-2">
              Desa Kalinyamat Kulon
            </p>
            <p className="md:text-body-2 text-caption-1">Kota Tegal</p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          {" "}
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Cari..."
            size="sm"
            startContent={<Search size={18} />}
            type="search"
          />{" "}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center -mr-12" justify="end ">
        <NavbarItem className="flex  text-black">
          <MessageCircle className=" w-24 -mr-8" />
          <MessageSquare className=" w-24 -mr-4" />
        </NavbarItem>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex items-center">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <p className="font-semibold ml-3 hover:cursor-pointer">
                Ferianta
              </p>
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

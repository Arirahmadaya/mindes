import React, { useState, useEffect, useCallback } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import {
  Home,
  User,
  BarChart2,
  BookOpen,
  LogOut,
  Key,
  LogIn,
} from "react-feather";
import { useLocation } from "react-router-dom";

export default function NavbarUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  const menuItemsMain = [
    { name: "Beranda", icon: Home, href: "/" },
    { name: "Profil", icon: User, href: "/profil" },
    { name: "Infografis", icon: BarChart2, href: "/infografis" },
    { name: "Berita", icon: BookOpen, href: "/berita" },
  ];

  const menuItems = [
    { name: "Beranda", icon: Home, href: "/" },
    { name: "Profil", icon: User, href: "/profil" },
    { name: "Infografis", icon: BarChart2, href: "/infografis" },
    { name: "Berita", icon: BookOpen, href: "/berita" },
    { name: "Log Out", icon: LogOut, href: "/login" },
    { name: "Login", icon: Key, href: "/login" },
  ];

  const isActive = (href) =>
    location.pathname === href ||
    (href === "/infografis" && location.pathname.startsWith(href));

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-primary-40 lg:px-[40px]"
      maxWidth={"full"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="flex">
          <img
            src="/public/logo/logo_light.png"
            alt="logo"
            className="md:w-12 md:h-12 pr-2 blok w-10 h-10"
          />
          <div className="text-white hover:text-white/80">
            <p className="font-bold lg:text-heading-6 text-body-2">
              Desa Kalinyamat Kulon
            </p>
            <p className="md:text-body-2 text-caption-1">Kota Tegal</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 text-white" justify="center">
        {menuItemsMain.map((item, index) => (
          <NavbarItem key={index} isActive={isActive(item.href)}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <NavbarContent as="div" className="items-center" justify="center">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className="flex items-center">
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
                    name="Ferianta"
                    size="sm"
                    src="/img_desa/sudirmo.jpg"
                  />
                  <p className="text-white font-semibold ml-3 hover:cursor-pointer">
                    Ferianta
                  </p>
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Login sebagai</p>
                  <p className="font-semibold">ferianta@gmail.com</p>
                </DropdownItem>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">Pengaturan</DropdownItem>
             
                <DropdownItem key="help">Bantuan</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              className="bg-primary-30 text-white rounded-md"
              href="/login"
              variant="flat"
            >
              Login <LogIn />
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full flex items-center py-2 px-4"
              href={item.href}
              size="lg"
            >
              <item.icon className="mr-4" />
              {item.name}
            </Link>
            {index !== menuItems.length - 1 && (
              <hr className="my-2 border-gray-300" />
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

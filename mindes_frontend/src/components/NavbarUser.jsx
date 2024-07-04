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
import axios from "axios";

export default function NavbarUser() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const location = useLocation();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    console.log("Status Login dari LocalStorage:", loggedInStatus);
    setIsLoggedIn(loggedInStatus === "true");

    if (loggedInStatus === "true") {
      fetchProfile();
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token tidak ditemukan");
        setIsLoggedIn(false);
        return;
      }
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Response dari server untuk profile:", response.data);
      setProfile(response.data.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil profile", error);
      setIsLoggedIn(false);
    }
  };

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setProfile({});
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", "userTokenHere");
    setIsLoggedIn(true);
    fetchProfile();
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
    isLoggedIn
      ? { name: "Log Out", icon: LogOut, href: "/login" }
      : { name: "Login", icon: Key, href: "/login" },
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
            className="lg:w-12 lg:h-12 pr-2 blok md:w-10 md:h-10 w-9 h-9"
          />
          <div className="text-white hover:text-white/80 ">
            <p className="font-bold lg:text-heading-6 md:text-body-2 text-caption-2 -mb-1 ">
              Desa Kalinyamat Kulon
            </p>
            <p className="lg:text-body-1 md:text-body-2 text-[10px]">Kota Tegal</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-10 text-white"
        justify="center"
      >
        {menuItemsMain.map((item, index) => (
          <NavbarItem key={index} isActive={isActive(item.href)}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn && profile ? (
          <NavbarContent as="div" className="items-center" justify="center">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className="flex items-center">
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform w-6 h-6 md:w-8 md:h-8 text-tiny"
                    color="default"
                    name={profile.username}
                    size="sm"
                    src={profile.img_user || "/img_desa/user.png"}
                  />
                  <p className="text-white md:text-caption-1 text-caption-2 hover:font-semibold ml-3 hover:cursor-pointer">
                    {profile.username}
                  </p>
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="login-as" className="h-14 gap-2" textValue={`Login sebagai ${profile.email}`}>
                  <p className="font-semibold">Login sebagai</p>
                  <p className="font-semibold">{profile.email}</p>
                </DropdownItem>
                <DropdownItem key="user-profile" as={Link} href="/userprofil" textValue="Profile">
                  Profile
                </DropdownItem>
                <DropdownItem key="help" as={Link} href="/bantuan" textValue="Bantuan">
                  Bantuan
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogout}
                  textValue="Log Out"
                >
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
              onClick={handleLogin}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, NavbarContent, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Link, Button, NavbarItem } from "@nextui-org/react";
import { Search, LogIn } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoggedIn(false);
          return;
        }
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Terjadi kesalahan", error);
        setIsLoggedIn(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setProfile(null);
    navigate("/login");
  };

  return (
    <Navbar isBordered className="bg-grayscale-10 rounded-b-lg">
      <NavbarContent justify="start">
        <div className="relative max-w-full sm:max-w-md h-11">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            className="w-full h-full pl-12 pr-4 py-2 rounded-2xl text-base text-gray-700 bg-white border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-primary-50/50 hover:primary focus:border-transparent
              transition-all duration-200 ease-in-out shadow-primary hover:shadow-lg"
            placeholder="Cari data..."
            type="search"
          />
        </div>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center">
        {isLoggedIn && profile ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center">
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="default"
                  name={profile.username}
                  size="sm"
                  src={profile.img_user || "/img_desa/user.png"}
                />
                <p className="font-semibold ml-3 hover:cursor-pointer">{profile.username}</p>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="login-as" className="h-14 gap-2" textValue={`Login sebagai ${profile.email}`}>
                <p className="font-semibold">Login sebagai</p>
                <p className="font-semibold">{profile.email}</p>
              </DropdownItem>
              <DropdownItem key="profile" as={Link} href="/admin/userprofil" textValue="Profile">
                Profile
              </DropdownItem>
              <DropdownItem key="help" as={Link} href="/admin/bantuan" textValue="Bantuan">
                Bantuan
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout} textValue="Log Out">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button as={Link} className="bg-primary-30 text-white rounded-md" href="/login" variant="flat">
              Login <LogIn />
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}

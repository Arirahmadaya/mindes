import React from "react";
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
} from "@nextui-org/react";
import {
  Home,
  User,
  BarChart2,
  Phone,
  Headphones,
} from "react-feather";
import { useLocation } from "react-router-dom";

export default function NavbarMINDes() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItemsMain = [
    { name: "Beranda", icon: Home, href: "/about/mindes" },
    { name: "Product", icon: User, href: "/" },
    { name: "Profile", icon: BarChart2, href: "/about/mindes/madilog-team" },
    
  ];

  const menuItems = [
    { name: "Beranda", icon: Home, href: "/about/mindes" },
    { name: "Product", icon: User, href: "/" },
    { name: "Profile", icon: BarChart2, href: "/about/mindes/madilog-team" },
    { name: "Hubungi", icon: Phone, href: "#contact" },
   
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll

      className=" lg:px-[40px]"
      maxWidth={"full"}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-blue"
        />
        <NavbarBrand className="flex">
          <img
            src="/logo/icon_dark.png"
            alt="logo"

            className="md:w-auto md:h-11 lg:pr-2 pr-1  blok w-auto h-10 "

          />
          <div className="text-blue hover:text-blue/80 mt-1 hidden lg:block">
            <p className="font-bold lg:text-heading-6 ">
              ADILOG
            </p>
            <p className="font-bold lg:text-heading-6">INDES</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 text-black  lg:-mr-64" justify="end">
        {menuItemsMain.map((item, index) => (
          <NavbarItem 
            key={index} 
            isActive={
              item.href === "/about/mindes/madilog-team"
                ? location.pathname.startsWith(item.href)
                : location.pathname === item.href
            }
          >
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end"  >
        <NavbarItem>
          <Button
            as={Link}
            className="bg-primary-30 text-white rounded-md"
            href="#contact"
            variant="flat"
            
          >
            Contact <Headphones />
          </Button>
        </NavbarItem>
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

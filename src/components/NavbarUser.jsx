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
  BookOpen,
  LogOut,
  Key,
  LogIn,
} from "react-feather";

export default function NavbarUser() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Beranda", icon: Home, href: "/" },
    { name: "Profil", icon: User, href: "/profil" },
    { name: "Infografis", icon: BarChart2, href: "/infografis/apbdes" },
    { name: "Berita", icon: BookOpen, href: "/berita" },
    { name: "Log Out", icon: LogOut, href: "/login" },
    { name: "Login", icon: Key, href: "/login" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-primary-40"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white "
        />
        <NavbarBrand className="lg:-ml-32 flex">
          <img
            src="logo/logo_light.png"
            alt="logo"
            className="md:w-12 md:h-12 pr-2 blok w-10 h-10 "
          />
          <div className="text-white hover:text-white/80">
            <p className="font-bold lg:text-heading-6 text-body-2">
              Desa Kalinyamat Kulon
            </p>
            <p className="md:text-body-2 text-caption-1">Kota Tegal</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-10 text-white"
        justify="center"
      >
        {/* isactive didnt work in navbar */}
        <NavbarItem isActive>
          <Link href="/" color="foreground">
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/profil" aria-current="page">
            Profil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/infografis/apbdes">
            Infografis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/berita">
            Berita
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="lg:-mr-28">
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
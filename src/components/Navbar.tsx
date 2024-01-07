import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Timeline",
      route: "/timeline",
    },
  ];

  return (
    <NextUiNavbar
      maxWidth="full"
      className="text-primary"
      classNames={{
        item: ["flex", "relative", "h-full", "items-center"],
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="text-inherit text-3xl">Akshay A</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menu, idx) => (
          <NavbarMenuItem key={idx}>
            <Link
              className={
                menu.route === pathname ? "text-primary" : "text-secondary"
              }
              href={menu.route}
            >
              {menu.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;

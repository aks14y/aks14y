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

      <NavbarMenu className="bg-primary md:!h-1/2 md:w-1/4 md:ml-auto md:mr-12 p-12">
        {menuItems.map((menu, idx) => (
          <NavbarMenuItem key={idx}>
            <Link
              className={`font-bold leading-9
                ${menu.route === pathname ? "text-secondary" : "text-purple"}
              `}
              href={menu.route}
            >
              {menu.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="pt-5 font-medium leading-10">
          <p className="text-secondary">SAY HELLO</p>
          <Link href="mailto:akshay4362847@gmail.com" className="text-purple">akshay4362847@gmail.com</Link>
        </div>
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;

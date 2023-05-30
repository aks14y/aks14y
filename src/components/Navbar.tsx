import { Navbar as NextUiNavbar, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navbar = () => {
  const {isDark} = useTheme();
  return (
    <NextUiNavbar variant="static" isBordered={isDark} >
      <NextUiNavbar.Brand>
        <Link href="/">
          <Text weight="bold" color="primary">Navbar</Text>
        </Link>
      </NextUiNavbar.Brand>
    </NextUiNavbar>
  );
};

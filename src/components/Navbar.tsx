import { Navbar as NextUiNavbar, Text} from "@nextui-org/react";

export const Navbar = () => {
  return (
    <NextUiNavbar maxWidth="xl" variant="floating">
      <NextUiNavbar.Brand>
          <Text h3 weight="bold" color="secondary" css={{margin: 0}}>Akshay A</Text>
      </NextUiNavbar.Brand>
    </NextUiNavbar>
  );
};

import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto_Flex as FontRobotoFlex,
} from "@next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRobotoFlex = FontRobotoFlex({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  preload: true
});

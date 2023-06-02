"use client";

import "@/styles/globals.scss";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProps } from "next/app";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: '#6484D6',
      secondary: '#C7C7C7',
      tertiary : '#F7FCFF',
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // optional
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;

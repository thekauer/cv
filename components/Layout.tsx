'use client';

import { createTheme, NextUIProvider } from '@nextui-org/react/';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Navbar } from './Navbar';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export const Layout = ({ children }: { children: ReactNode }) => {
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
        <Navbar />
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
};

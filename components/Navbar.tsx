'use client';

import {
  Navbar as NextNavbar,
  Text,
  useTheme,
  Switch,
} from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <NextNavbar isCompact variant="sticky">
      <NextNavbar.Content></NextNavbar.Content>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </NextNavbar>
  );
};

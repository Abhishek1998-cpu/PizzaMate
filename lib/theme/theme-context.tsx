import React, { createContext, useContext, useMemo, useState } from 'react';

import { setStoredThemeMode, type ThemeMode } from './theme-mode';

type ThemeModeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => Promise<void>;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

export function ThemeModeProvider(props: {
  initialMode: ThemeMode;
  children: React.ReactNode;
}) {
  const [mode, setModeState] = useState<ThemeMode>(props.initialMode);

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      setMode: async (next) => {
        setModeState(next);
        await setStoredThemeMode(next);
      },
    }),
    [mode]
  );

  return <ThemeModeContext.Provider value={value}>{props.children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeModeProvider');
  return ctx;
}


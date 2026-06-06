"use client";

import React, { createContext, useContext, useMemo } from "react";

// Provide a mock context for any components (like shadcn/ui) that might call useTheme()
const MockThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  systemTheme: "dark",
  resolvedTheme: "dark",
});

export const useTheme = () => useContext(MockThemeContext);

export default function ThemeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const contextValue = useMemo(() => ({
    theme: "dark",
    setTheme: () => {},
    systemTheme: "dark",
    resolvedTheme: "dark",
  }), []);

  return (
    <MockThemeContext.Provider value={contextValue}>
      {children}
    </MockThemeContext.Provider>
  );
}

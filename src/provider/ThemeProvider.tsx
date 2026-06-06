import React from "react";

export default function ThemeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <>{children}</>;
}

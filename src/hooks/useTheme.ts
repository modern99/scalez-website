import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function resolveInitialTheme() {
  return true;
}

export function applyTheme(isDark: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }
}

export function initializeTheme() {
  applyTheme(resolveInitialTheme());
}

export function useTheme() {
  const [isDark, setIsDark] = useState(resolveInitialTheme);

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((value) => !value) };
}

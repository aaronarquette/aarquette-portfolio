'use client'

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"

export default function ThemeButton() {
  const {theme, setTheme} = useTheme();

  return (
    <button 
    onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
    className="outline-2 fixed z-100 rounded-full right-3 bottom-3 w-10 h-10 flex items-center justify-center"
    >
        <Moon className="absolute block dark:hidden"/>
        <Sun className="absolute hidden dark:block "/>
    </button>
  );
}
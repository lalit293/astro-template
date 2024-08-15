import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@shadcn/button"

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark = theme === "dark"
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <Button variant="outline" size="icon" className="absolute right-1 top-1" onClick={() => {
      if (document.documentElement.classList.contains("dark")) {
        setThemeState("theme-light");
      } else {
        setThemeState("dark")
      }
    }}>
      {theme === "theme-light" ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" /> :
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" /> }
    </Button>
  )
}

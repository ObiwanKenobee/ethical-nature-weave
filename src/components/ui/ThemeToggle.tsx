
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative overflow-hidden rounded-full w-9 h-9"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="sr-only">Toggle theme</span>
      <Sun
        className={`h-5 w-5 transition-all ${
          theme === "dark" ? "scale-0 -translate-y-6 opacity-0" : "scale-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          theme === "dark" ? "scale-100" : "scale-0 translate-y-6 opacity-0"
        }`}
      />
      <span className="absolute inset-0 transform-gpu after:absolute after:w-1 after:h-1 after:rounded-full after:bg-background/80 after:top-[18%] after:right-[28%] after:shadow-[0_0_6px_1px_rgba(255,255,255,0.3)]" />
    </Button>
  );
}

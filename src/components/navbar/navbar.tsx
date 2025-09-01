import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isLight = theme === "light"

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;
  return (
    <nav className="flex justify-center items-center gap-7 mt-5">

      <NavbarItem icon="material-symbols:home-outline-rounded" title="Página inicial" />
      <NavbarItem icon="pepicons-pop:rewind-time" title="Ver histórico" />
      <NavbarItem icon="solar:settings-outline" title="Configurações" />
      <NavbarItem onClick={(e) => {
        e.preventDefault();
        handleThemeChange();
      }} icon={isLight ? "solar-moon-outline" : "solar:sun-outline"} title="Mudar tema" />
    </nav>
  );
}

import { ThemeContext } from "@/context/theme";
import { Theme } from "@/types/Theme";
import { useContext, useEffect } from "react";


export const useTheme = ():[Theme, ()=>void] => {
  const [theme, setTheme] = useContext(ThemeContext);
  useEffect(() => {
    theme === Theme.Dark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
    document.body.classList.toggle('dark');
  }
  return [theme, toggleTheme];
}
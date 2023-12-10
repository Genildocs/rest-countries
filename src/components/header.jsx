import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) || {};

  return (
    <div className=" flex items-center justify-around gap-12 shadow-concreto h-[5rem] ">
      <div>
        <h1 className="text-sm font-extrabold  ">Where in the world?</h1>
      </div>
      <div className="flex items-center gap-1">
        {theme === "light" ? (
          <MoonIcon className="h-[20px] w-[20px] text-slate-900" />
        ) : (
          <SunIcon className="h-[20px] w-[20px] text-orange-300" />
        )}
        <button className=" text-xs font-semibold" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;

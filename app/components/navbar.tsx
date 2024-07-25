"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { github, sun } from "../utils/icons";
import { useTheme } from "next-themes";
import { useState } from "react";
import SearchDialog from "./SearchDialog/search";
import { useGlobalContext } from "../context/globalContext";
const Navbar = () => {
  const [mode, setMode] = useState("dark");
  const { setTheme } = useTheme();
  const router = useRouter();
  const toggleMode = () => {
    if (mode === "dark") {
      setTheme("light");
      setMode("light");
    } else {
      setTheme("dark");
      setMode("dark");
    }
  };
  return (
    <div className="w-full py-4 flex items-center justify-between ">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <Button
            className=" flex items-center gap-2 "
            onClick={() => toggleMode()}
          >
            {" "}
            <span className="sr-only">{mode}</span> {sun}
          </Button>
          <Button
            className=" flex items-center gap-2 "
            onClick={() => router.push("https//github")}
          >
            {github} source-code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

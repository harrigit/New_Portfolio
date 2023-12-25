"use client";

import DarkModeIcon from "@/assets/icons/DarkModeIcon";
import LightModeIcon from "@/assets/icons/LightModeIcon";
import React, { useState, useEffect } from "react";

const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme in localStorage or use system preference
    const savedTheme =
      localStorage.getItem("currentTheme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  function handleButtonClick() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("currentTheme", newTheme);
  }

  return (
    <button
      aria-label="Change Theme"
      onClick={handleButtonClick}
      className="fixed bottom-12 right-8 z-50 theme-button"
    >
      <div className="flex justify-center items-center h-12 w-12 rounded-full bg-secondary shadow-md glow">
        {currentTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
    </button>
  );
};

export default ThemeButton;

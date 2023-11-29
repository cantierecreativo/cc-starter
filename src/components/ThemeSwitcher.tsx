"use client";

import { ChangeEvent } from "react";

export default function ThemeSwitcher() {
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value || "";
    if (value && document.documentElement) {
      document.documentElement.setAttribute("data-theme", value);
    }
  }

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={(e) => handleChange(e)}
    >
      <option disabled selected>
        change theme
      </option>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}

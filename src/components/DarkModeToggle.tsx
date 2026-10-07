"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] =
    useState(false);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
      px-4
      py-2
      rounded-xl
      border
      "
    >
      {dark
        ? "☀ Light"
        : "🌙 Dark"}
    </button>
  );
}

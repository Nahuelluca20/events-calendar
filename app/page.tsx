"use client";

import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {Navbar} from "@/components/Navbar";

export default function Home() {
  const {setTheme} = useTheme();

  return (
    <main className="">
      <Button>Click me</Button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setTheme("light")}
      >
        CLICK to light
      </button>

      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setTheme("dark")}
      >
        CLICK to dark
      </button>
    </main>
  );
}

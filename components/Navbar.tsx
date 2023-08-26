"use client";

import * as React from "react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

import {Input} from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {Button} from "./ui/button";

export function Navbar() {
  const {theme, setTheme} = useTheme();

  return (
    <NavigationMenu className="py-4 px-6 xl:px-0 border-b-[3px] mb-2 max-w-full">
      <div className="max-w-[1200px] mx-auto flex gap-3 md:gap-10 justify-between w-full items-center">
        <NavigationMenuList className="gap-5">
          <Link legacyBehavior passHref href="/">
            <h1 className="font-bold cursor-pointer">EventsCalendar</h1>
          </Link>
          <NavigationMenuItem>
            <Link legacyBehavior passHref href="/events">
              events
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link legacyBehavior passHref href="/calendar">
              calendar
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem className="pl-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

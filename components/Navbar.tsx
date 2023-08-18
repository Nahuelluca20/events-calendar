"use client";

import * as React from "react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {Button} from "./ui/button";

export function Navbar() {
  const {theme, setTheme} = useTheme();

  return (
    <NavigationMenu className="py-4 px-6 xl:px-0 border-b-[3px] mb-2 max-w-full">
      <div className="max-w-[1200px] mx-auto flex gap-3 md:gap-10 justify-between w-full items-center">
        <NavigationMenuList className="gap-10">
          <Link legacyBehavior passHref href="/">
            <h1 className="font-bold cursor-pointer">EventsCalendar</h1>
          </Link>
          <NavigationMenuItem>
            <Link legacyBehavior passHref href="/events">
              events
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Input className="border-2" placeholder="search" />
          </NavigationMenuItem>
          <NavigationMenuItem className="pl-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
            >
              {theme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              )}
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({className, title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);

ListItem.displayName = "ListItem";

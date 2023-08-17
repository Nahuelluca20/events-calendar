"use client";

import * as React from "react";
import Link from "next/link";

import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {Icons} from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <NavigationMenu className="py-4 px-10 border-b-[3px] mb-10 gap-3 md:gap-10 justify-between max-w-full ">
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
      </NavigationMenuList>
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

"use client";

import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import NextEvent from "@/components/NextEvent";
import {ScrollArea} from "@/components/ui/scroll-area";
import EventItem from "@/components/EventItem";

export default function Home() {
  const {theme, setTheme} = useTheme();
  const eventsMock = [
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
    {
      eventName: "Incutalk",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "Incutalk2",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "Incutalk3",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "Incutalk4",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "Incutalk5",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "Incutalk7",
      eventDescription: "Alguioen de incubator va a dar una charla",
    },
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
    {
      eventName: "AI don sarasa",
      eventDescription: "AI don sarasa en tal lugar",
    },
  ];

  return (
    <main className="p-5">
      <NextEvent />
      <section className="md:flex">
        <aside>
          <ScrollArea className="h-[200px] md:h-[500px] w-full md:w-[350px] lg:w-[400px] rounded-md border-[3px] border-slate-300 p-4 my-5">
            {eventsMock.map((event, index) => (
              <EventItem key={index} {...event} />
            ))}
          </ScrollArea>
        </aside>

        <Button onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
          Click me
        </Button>
      </section>
    </main>
  );
}

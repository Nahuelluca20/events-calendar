"use client";

import NextEvent from "@/components/NextEvent";
import {ScrollArea} from "@/components/ui/scroll-area";
import EventItem from "@/components/EventItem";
import {AddEvent} from "@/components/AddEvent";

export default function Home() {
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
    <main>
      <NextEvent />
      <section className="grid md:flex my-5 gap-5 md:gap-10">
        <aside>
          <ScrollArea
            className="h-[200px] md:h-[500px] w-full md:w-[350px] lg:w-[400px] rounded-md border-[3px] border-slate-300 p-4"
            type="auto"
          >
            {eventsMock.map((event, index) => (
              <EventItem key={index} {...event} />
            ))}
          </ScrollArea>
        </aside>
        <article className="w-full">
          <AddEvent />
        </article>
      </section>
    </main>
  );
}

"use client";

import NextEvent from "@/components/NextEvent";
import {AddEvent} from "@/components/AddEvent";
import EventsList from "@/components/EventsList";
import {eventsMock} from "@/utils/eventsMock";

export default function Home() {
  return (
    <main>
      <NextEvent />
      <section className="grid md:flex my-5 gap-5 md:gap-10">
        <aside>
          <EventsList events={eventsMock} />
        </aside>
        <article className="w-full">
          <AddEvent />
        </article>
      </section>
    </main>
  );
}

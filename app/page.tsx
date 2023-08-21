import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {format, parseISO} from "date-fns";

import NextEvent from "@/components/NextEvent";
import {AddEvent} from "@/components/AddEvent";
import EventsList from "@/components/EventsList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({cookies});
  const {
    data: {session},
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const {data} = await supabase.from("events").select();

  const events =
    data &&
    data.map((event) => ({
      eventName: event.event_name,
      dateOfEvent: format(parseISO(event.date_event), "dd-MM-yyyy"),
      eventDescription: event.event_description,
      topic: event.topic,
    }));

  return (
    <main>
      <NextEvent />
      <section className="grid md:flex my-5 gap-5 md:gap-10">
        <aside>
          <EventsList events={events} />
        </aside>
        <article className="w-full">
          <AddEvent />
        </article>
      </section>
    </main>
  );
}

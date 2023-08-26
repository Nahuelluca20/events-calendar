import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {format, parseISO} from "date-fns";

import EventsList from "@/components/EventsList";

export const dynamic = "force-dynamic";

export default async function page() {
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
      id: event.id,
      eventName: event.event_name,
      dateOfEvent: format(parseISO(event.date_event), "dd-MM-yyyy"),
      eventDescription: event.event_description,
      topic: event.topic,
    }));

  return (
    <section>
      <EventsList withFilters className="md:w-full lg:w-full mt-5 lg:px-20" events={events} />
    </section>
  );
}

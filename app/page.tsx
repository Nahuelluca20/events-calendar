import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {format, parseISO} from "date-fns";
import {createServerActionClient} from "@supabase/auth-helpers-nextjs";
import {z} from "zod";

import {toast} from "@/components/ui/use-toast";
import NextEvent from "@/components/NextEvent";
import {AddEvent} from "@/components/AddEvent";
import EventsList from "@/components/EventsList";
import {FormAddEvent} from "@/components/FormAddEvent";
import {EventFormSchema} from "@/utils/schemas";

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

  async function onSubmit(data: z.infer<any>) {
    "use server";
    const supabase = createServerActionClient<Database>({cookies});

    await supabase.from("events").insert({
      event_name: data.eventName,
      date_event: data.dateOfEvent,
      topic: data.topic,
      event_description: data.eventDescription,
    });

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
          <AddEvent>
            <FormAddEvent onSubmit={onSubmit} />
          </AddEvent>
        </article>
      </section>
    </main>
  );
}

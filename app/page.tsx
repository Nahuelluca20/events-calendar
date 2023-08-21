import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import NextEvent from "@/components/NextEvent";
import {AddEvent} from "@/components/AddEvent";
import EventsList from "@/components/EventsList";
import {eventsMock} from "@/utils/eventsMock";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<any>({cookies});
  const {
    data: {session},
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

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

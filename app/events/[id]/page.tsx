import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {format, parse, parseISO} from "date-fns";

import {Calendar} from "@/components/ui/calendar";

export default async function EventView({params: {id}}: {params: {id: string}}) {
  const supabase = createServerComponentClient<Database>({cookies});
  const {data} = await supabase.from("events").select().match({id}).single();

  const selectedDate = data?.date_event ? parseISO(data?.date_event) : undefined;

  return (
    <div>
      esto es id: {id}
      <Calendar
        className="rounded-md border"
        defaultMonth={selectedDate}
        mode="single"
        selected={selectedDate}
      />
    </div>
  );
}

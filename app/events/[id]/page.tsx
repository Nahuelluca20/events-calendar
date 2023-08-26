import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {parseISO} from "date-fns";

import {Calendar} from "@/components/ui/calendar";
import {getEventTopicColor} from "@/utils/getEventTopic";

export default async function EventView({params: {id}}: {params: {id: string}}) {
  const supabase = createServerComponentClient<Database>({cookies});
  const {data} = await supabase.from("events").select().match({id}).single();

  const selectedDate = data?.date_event ? parseISO(data?.date_event) : undefined;
  const color = data && getEventTopicColor(data.topic);

  return (
    <div className="grid md:flex md:gap-x-20 w-full justify-center">
      <div>
        <hgroup className="flex gap-x-2 items-center">
          <h1 className="text-2xl font-bold">{data?.event_name}</h1>
          <h6
            className={`text-[12px] rounded-xl font-bold leading-none text-accent-foreground border-[2px] py-1 px-2`}
            style={{borderColor: `${color}`, color: `${color}`}}
          >
            {data?.topic.toLocaleLowerCase()}
          </h6>
        </hgroup>
        <p className="text-l flex-grow-2 mt-2 mb-6">Description: {data?.event_description}</p>
      </div>
      <Calendar
        className="rounded-md border w-fit"
        defaultMonth={selectedDate}
        mode="single"
        selected={selectedDate}
      />
    </div>
  );
}

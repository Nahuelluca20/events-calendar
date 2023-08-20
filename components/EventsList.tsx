import {EventsSchema} from "@/utils/schemas";

import {ScrollArea} from "./ui/scroll-area";
import EventItem from "./EventItem";

export default function EventsList({events}: {events: EventsSchema[]}) {
  return (
    <ScrollArea
      className="h-[200px] md:h-[500px] w-full md:w-[350px] lg:w-[400px] rounded-md border-[3px] border-slate-300 p-4"
      type="auto"
    >
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </ScrollArea>
  );
}

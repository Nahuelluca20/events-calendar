"use client";
import {useState} from "react";

import {EventsSchema} from "@/utils/schemas";
import {cn} from "@/lib/utils";

import {ScrollArea} from "./ui/scroll-area";
import EventItem from "./EventItem";
import EventsFilter from "./EventsFilter";

export default function EventsList({
  events,
  className,
  withFilters = false,
}: {
  events: EventsSchema[];
  className?: string;
  withFilters?: boolean;
}) {
  const [filterValues, setFilterValues] = useState<EventsSchema>({
    eventName: "",
    dateOfEvent: "",
    eventDescription: "",
    topic: "",
  });

  const filteredByName = events.filter((event) =>
    event.eventName.toLocaleLowerCase().includes(filterValues.eventName.toLocaleLowerCase()),
  );

  const filteredByTopic = filteredByName.filter((event) =>
    event.topic.includes(filterValues.topic),
  );

  const filteredByDate = filteredByTopic.filter((event) => {
    if (!filterValues.dateOfEvent.from && !filterValues.dateOfEvent.to) {
      return true;
    }
    const eventDate = new Date(event.dateOfEvent.toLocaleString().split("-").reverse().join("-"));
    const fromDate = new Date(filterValues.dateOfEvent.from);
    const toDate = new Date(filterValues.dateOfEvent.to);

    return eventDate >= fromDate && eventDate <= toDate;
  });

  const filteredEvents = filteredByDate;

  return (
    <>
      {withFilters && <EventsFilter setValues={setFilterValues} values={filterValues} />}
      <ScrollArea
        className={cn(
          "h-[200px] md:h-[500px] w-full md:w-[350px] lg:w-[400px] rounded-md border-[3px] border-slate-300 p-4",
          className,
        )}
        type="auto"
      >
        {filteredEvents.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </ScrollArea>
    </>
  );
}

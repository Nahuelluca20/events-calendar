"use client";
import {useEffect, useState} from "react";
import {DateRange} from "react-day-picker";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

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
  events: EventsSchema[] | null;
  className?: string;
  withFilters?: boolean;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const channel = supabase.realtime
      .channel("events")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "events",
        },
        (payload) => {
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);

  const [filterValues, setFilterValues] = useState<EventsSchema>({
    eventName: "",
    dateOfEvent: {from: undefined, to: undefined},
    eventDescription: "",
    topic: "",
  });

  const filteredByName = events?.filter((event) =>
    event.eventName.toLocaleLowerCase().includes(filterValues.eventName.toLocaleLowerCase()),
  );

  const filteredByTopic = filteredByName?.filter((event) =>
    event.topic.includes(filterValues.topic),
  );

  const filteredByDate = filteredByTopic?.filter((event) => {
    const dateRange = filterValues.dateOfEvent as DateRange;

    if (!dateRange || !dateRange.from || !dateRange.to) {
      return true;
    }

    const eventDate = new Date(event.dateOfEvent.toLocaleString().split("-").reverse().join("-"));
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);

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
        {filteredEvents?.map((event, index) => <EventItem key={index} event={event} />)}
      </ScrollArea>
    </>
  );
}

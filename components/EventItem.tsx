import {ChevronRight} from "lucide-react";
import Link from "next/link";

import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {getEventTopicColor} from "@/utils/getEventTopic";
import {EventsSchema} from "@/utils/schemas";

export default function EventItem({event}: {event: EventsSchema}) {
  const color = getEventTopicColor(event.topic);

  return (
    <div>
      <div className="flex justify-between items-center pr-2">
        <div className="flex flex-col gap-1">
          <hgroup className="flex gap-2 items-center mb-1">
            <h4 className="text-sm font-medium leading-none text-accent-foreground">
              {event.eventName}
            </h4>
            <span
              className={`text-[12px] rounded-xl font-bold leading-none text-accent-foreground border-[2px] py-1 px-2`}
              style={{borderColor: `${color}`, color: `${color}`}}
            >
              {event.topic.toLocaleLowerCase()}
            </span>
          </hgroup>
          <span className="text-sm leading-none text-muted-foreground">
            {event.eventDescription} - {event.dateOfEvent.toString()}
          </span>
        </div>
        <Link href={`/events/${event.id}`}>
          <Button size="icon" variant="secondary">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <Separator className="mt-2 mb-5 border-slate-300 border-[1.5px]" />
    </div>
  );
}

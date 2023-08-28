import {Rocket} from "lucide-react";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {EventsSchema} from "@/utils/schemas";

export default function NextEvent({event}: {event: EventsSchema}) {
  return (
    <Alert className="w-[100%] border-[3px] border-slate-300">
      <Rocket className="h-6 w-6" />
      <AlertTitle className="ml-2">Next Event: {event.eventName}</AlertTitle>
      <AlertDescription className="ml-2">
        Event Description: {event.eventDescription}
      </AlertDescription>
    </Alert>
  );
}

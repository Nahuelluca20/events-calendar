import {ChevronRight} from "lucide-react";

import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function EventItem({
  eventName,
  eventDescription,
}: {
  eventName: string;
  eventDescription: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center pr-2">
        <div className="flex flex-col gap-1">
          <hgroup className="flex gap-2 items-center mb-1">
            <h4 className="text-sm font-medium leading-none text-accent-foreground">{eventName}</h4>
            <span className="text-[12px] rounded-xl font-bold text-green-500 leading-none text-accent-foreground border-[2px] border-green-500 py-1 px-2">
              22-08-2023
            </span>
          </hgroup>
          <span className="text-sm leading-none text-muted-foreground ">{eventDescription}</span>
        </div>
        <Button size="icon" variant="secondary">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <Separator className="mt-2 mb-5 border-slate-300 border-[1.5px]" />
    </div>
  );
}

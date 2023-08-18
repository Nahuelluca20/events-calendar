import {Separator} from "@/components/ui/separator";

export default function EventItem({
  eventName,
  eventDescription,
}: {
  eventName: string;
  eventDescription: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium leading-none text-accent-foreground">
            {eventName}{" "}
          </span>
          <span className="text-sm leading-none text-muted-foreground">{eventDescription}</span>
        </div>
      </div>

      <Separator className="mt-2 mb-5 border-slate-300 border-[1.5px]" />
    </div>
  );
}

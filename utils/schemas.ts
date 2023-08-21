import {DateRange} from "react-day-picker";
import * as z from "zod";

export const EventFormSchema = z.object({
  eventName: z
    .string({
      required_error: "Please write a event name to display.",
    })
    .min(2)
    .max(50),
  topic: z.string({
    required_error: "Please select an topic to display.",
  }),
  eventDescription: z
    .string({
      required_error: "Please write a event description.",
    })
    .min(2)
    .max(50),
  dateOfEvent: z.date({
    required_error: "A date of event is required.",
  }),
});

export type EventsSchema = {
  eventName: string;
  dateOfEvent: Date | string | DateRange;
  eventDescription: string;
  topic: string;
};

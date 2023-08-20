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
  dateOfEvent: z.date({
    required_error: "A date of event is required.",
  }),
});

export type EventsSchema = {
  eventName: string;
  dateOfEvent: Date | string;
  eventDescription: string;
  topic: string;
};

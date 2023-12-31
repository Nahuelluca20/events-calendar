"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {format} from "date-fns";
import {Calendar as CalendarIcon} from "lucide-react";
import {useEffect} from "react";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {EventFormSchema} from "@/utils/schemas";
import {cn} from "@/lib/utils";

import {Input} from "../ui/input";
import {Calendar} from "../ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "../ui/popover";

export const dynamic = "force-dynamic";

export function FormAddEvent({onSubmit}: {onSubmit: any}) {
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({
        eventName: "",
        eventDescription: "",
        dateOfEvent: undefined,
        topic: "",
      });
    }
  }, [form.formState, form.reset]);

  return (
    <Form {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(() => onSubmit(form.getValues()))}
      >
        <div className="lg:flex w-full space-y-3 lg:space-y-0 gap-x-5">
          <FormField
            control={form.control}
            name="eventName"
            render={({field}) => (
              <FormItem>
                <FormLabel>Name of the event</FormLabel>
                <FormControl>
                  <Input {...form.register("eventName")} placeholder="Event Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDescription"
            render={({field}) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    className="lg:w-[300px]"
                    {...form.register("eventDescription")}
                    placeholder="Event Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="topic"
          render={({field}) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" {...form.register("topic")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="frontend">FrontEnd</SelectItem>
                  <SelectItem value="backend">BackEnd</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="test">Test/QA</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfEvent"
          render={({field}) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of event</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl {...form.register("dateOfEvent")}>
                    <Button
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                      variant={"outline"}
                    >
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    initialFocus
                    disabled={(date) => date < new Date()}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

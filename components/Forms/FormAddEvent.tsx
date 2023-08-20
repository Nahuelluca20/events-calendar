"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {Popover, PopoverTrigger, PopoverContent} from "@radix-ui/react-popover";
import {format} from "date-fns";
import {Calendar as CalendarIcon} from "lucide-react";
import {useTheme} from "next-themes";

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
import {toast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";

import {Input} from "../ui/input";
import {Calendar} from "../ui/calendar";

export function FormAddEvent() {
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
  });
  const {theme} = useTheme();

  function onSubmit(data: z.infer<typeof EventFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="eventName"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name of the event</FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({field}) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="frontend">FrontEnd</SelectItem>
                  <SelectItem value="backend">BackEnd</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="qa">QA/test</SelectItem>
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
                  <FormControl>
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
                <PopoverContent
                  align="start"
                  className={`border-slate-300 border-2 rounded-lg w-auto p-0 ${
                    theme === "dark" ? "bg-[#020817]" : "bg-white"
                  }`}
                >
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

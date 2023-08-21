import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {DateRange} from "react-day-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {EventsSchema} from "@/utils/schemas";

import {DatePickerRange} from "./DatePickerRange";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Button} from "./ui/button";

export default function EventsFilter({
  values,
  setValues,
}: {
  values: any;
  setValues: Dispatch<SetStateAction<EventsSchema>>;
}) {
  const [date, setDate] = useState<DateRange | undefined>();

  const filterByEventName = (value: string) => {
    setValues({...values, eventName: value});
  };

  const filterByTopic = (value: string) => {
    setValues({...values, topic: value});
  };

  const filterByDate = (value: string | DateRange) => {
    setValues({...values, dateOfEvent: value});
  };

  const clearFilters = () => {
    setDate(undefined);
    setValues({
      eventName: "",
      dateOfEvent: {from: undefined, to: undefined},
      eventDescription: "",
      topic: "",
    });
  };

  useEffect(() => {
    date && filterByDate(date);
  }, [date]);

  return (
    <div className="grid md:grid-cols-[repeat(2,minmax(100px,250px))] border-[3px] gap-5 px-4 lg:px-10 py-4 lg:flex items-end border-slate-300 rounded-xl">
      <div>
        <Label htmlFor="eventName">Event Name</Label>
        <Input
          className="w-[250px] mt-2"
          id="eventName"
          name="eventName"
          placeholder="name"
          type="text"
          value={values.eventName}
          onChange={(e) => filterByEventName(e.target.value)}
        />
      </div>
      <div className="col-span-1">
        <Label htmlFor="topic">Topic</Label>
        <Select onValueChange={(e) => filterByTopic(e)}>
          <SelectTrigger className="w-[250px] mt-2" value={values.topic}>
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontend">FrontEnd</SelectItem>
            <SelectItem value="backend">BackEnd</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
            <SelectItem value="infrastructure">Infrastructure</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="qa">Test/QA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="date">Date of Event</Label>
        <DatePickerRange className="mt-2" date={date} setDate={setDate} />
      </div>
      <div className="flex-grow flex mt-2 lg:mt-0 lg:justify-end">
        <Button onClick={() => clearFilters()}>Clear</Button>
      </div>
    </div>
  );
}

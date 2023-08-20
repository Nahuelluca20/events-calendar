import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {DatePickerRange} from "./DatePickerRange";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Button} from "./ui/button";

export default function EventsFilter() {
  return (
    <div className="border-[3px] gap-5 px-10 py-4 lg:flex items-end border-slate-300 rounded-xl">
      <div>
        <Label htmlFor="eventName">Event Name</Label>
        <Input className="w-[250px] mt-2" placeholder="name" type="text" />
      </div>
      <div>
        <Label htmlFor="topic">Topic</Label>
        <Select>
          <SelectTrigger className="w-[250px] mt-2">
            <SelectValue placeholder="Theme" />
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
      <div>
        <Label htmlFor="date">Date of Event</Label>
        <DatePickerRange className="mt-2" />
      </div>
      <div className="flex-grow flex justify-end">
        <Button>Search</Button>
      </div>
    </div>
  );
}

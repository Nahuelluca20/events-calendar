import * as React from "react";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddEvent() {
  return (
    <Card className="w-full border-[3px] border-slate-300 h-full">
      <CardHeader>
        <CardTitle>Upload Event</CardTitle>
        <CardDescription>Upload the event you found so we can all see it!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Event Name</Label>
              <Input id="name" placeholder="Name of the event" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Topic</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="frontend">FrontEnd</SelectItem>
                  <SelectItem value="backend">BackEnd</SelectItem>
                  <SelectItem value="devops">Devops</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="qa">Test/QA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

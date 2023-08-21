"use client";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {FormAddEvent} from "./Forms/FormAddEvent";

export function AddEvent() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <FormAddEvent />
      </CardContent>
    </Card>
  );
}

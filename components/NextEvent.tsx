import {Rocket} from "lucide-react";

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export default function NextEvent() {
  return (
    <Alert className="w-[100%] border-[3px] border-slate-300">
      <Rocket className="h-6 w-6" />
      <AlertTitle className="ml-2">Next Event!</AlertTitle>
      <AlertDescription className="ml-2">
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

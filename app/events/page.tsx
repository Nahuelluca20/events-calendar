import EventsList from "@/components/EventsList";
import {eventsMock} from "@/utils/eventsMock";

export default function page() {
  return (
    <section>
      <EventsList withFilters className="md:w-full lg:w-full mt-5 lg:px-20" events={eventsMock} />
    </section>
  );
}

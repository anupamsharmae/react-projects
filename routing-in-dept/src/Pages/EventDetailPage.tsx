import { Await, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
   const {event, events} = useRouteLoaderData('event-details');

   return (
      <>
         <h1>Event Detail page</h1>
         <Suspense fallback={<p>Loading Item...</p>}>
            <Await resolve={event}>
               {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
         </Suspense>
         <Suspense fallback={<p>Loading List...</p>}>
            <Await resolve={events}>
               {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
         </Suspense>
         {/* <EventItem event={data.event} /> */}
      </>
   )
}



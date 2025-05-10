
import { Await, useLoaderData } from "react-router"
import EventsList from "../components/EventsList"
import { Suspense } from "react";

export default function EventsPage() {
   const { events } = useLoaderData();



   return (
      <>
         <h1>Events page</h1>
         <Suspense fallback={<p>Loading ....</p>}>
            <Await resolve={events}>
               {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
         </Suspense>

      </>
   )
}

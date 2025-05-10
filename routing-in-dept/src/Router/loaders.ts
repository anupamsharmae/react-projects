import { LoaderFunctionArgs } from "react-router-dom";

export const eventDetailsloader = async ({ params }: LoaderFunctionArgs) => {
   const eventId = params.eventId;
   if (!eventId) { throw new Error('Event ID is required'); }

   const response = await fetch(`http://localhost:8080/events/${eventId}`);
   if (!response.ok) {
      throw Response.json({ message: 'Could not fetch the events.' }, { status: 500 })
   }

   return response;
};


export async function loadEvents(id) {
   const response = await fetch(`http://localhost:8080/events/${id}`);
   if (!response.ok) {
      throw Response.json({ message: 'Could not fetch the events.' }, { status: 500 })
   }

   const respData = await response.json();
   return respData.event
}

export async function deferEventGroupLoader({ params }) {
   const id = params.eventId;
   // defer loading
   return {
      event: await loadEvents(id),
      events: eventsLoader()
   }
}



export async function eventsLoader() {
   const response = await fetch('http://localhost:8080/events');
   if (!response.ok) {
      // throw new Error('Failed to fetch the response');
      // throw new Response(JSON.stringify({ message: 'Could not fetch the events.' }),
      //    { status: 500 }
      // )
      throw Response.json({ message: 'Could not fetch the events.' }, { status: 500 })
   }
   const respData = await response.json();
   return respData.events
   // return response;
}

export async function deferEventsloader() {
   return {
      events: eventsLoader()
   }
}
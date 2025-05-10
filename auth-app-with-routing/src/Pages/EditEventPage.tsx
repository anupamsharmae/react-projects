import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
   const data = useRouteLoaderData('event-details');;
   console.log(data);
   return (
      <>
         <h1>Edit Event page</h1>
         <EventForm event={data.event} method='patch' />
      </>
   )
}
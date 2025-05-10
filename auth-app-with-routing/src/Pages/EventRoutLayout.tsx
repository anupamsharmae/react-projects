import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

export default function EventRoutLayout() {
   return (
      <>
         <EventsNavigation />
         <Outlet />
      </>
   )
}
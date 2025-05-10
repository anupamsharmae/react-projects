import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventRoutLayout() {
   return (
      <>
         <EventsNavigation />
         <Outlet />
      </>
   )
}
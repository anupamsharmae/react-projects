import { Outlet } from "react-router";
import Navigation from "../components/nav/navigation";

export default function RootLayout() {
   return (
      <>
         <Navigation />
         <main>
            <Outlet />
         </main>
      </>
   )
}
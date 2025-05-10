import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RoutLayoutPage() {
   return (
      <>
         <MainNavigation />

         <main>
            <Outlet />
         </main>
      </>
   )
}
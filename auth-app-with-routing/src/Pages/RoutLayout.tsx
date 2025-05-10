import { Outlet, useLoaderData, useSubmit } from "react-router";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

export default function RoutLayoutPage() {
   const token = useLoaderData();
   const submit = useSubmit();

   useEffect(() => {
      if (!token) {
         return;
      }

      if (token === 'EXPIRED') {
         submit(null, { action: '/logout', method: 'post' });
         return;
      }

      const duration = getTokenDuration();

      setTimeout(() => {
         submit(null, { action: '/logout', method: 'post' });
      }, duration);

   }, [token, submit])

   return (
      <>
         <MainNavigation />

         <main>
            <Outlet />
         </main>
      </>
   )
}